# Packages
library(rvest)
library(janitor)
library(tidyverse)
library(xml2)
library(lubridate)

# Import website
lacounty_covid <- read_html("http://publichealth.lacounty.gov/media/coronavirus/locations.htm")

tables <- lacounty_covid %>% 
  html_elements("table") %>% 
  html_table

## Just the second one out of the list of lists
community_covid <- tables[2]

## Turn that into a dataframe
community_covid <- rbind.data.frame(community_covid)

## Clean
bur_glen <- community_covid %>% 
  clean_names() %>% 
  filter(city_community=="City of Burbank" | city_community == "City of Glendale")

# Get date
## Requires headless browser

system("/usr/local/bin/phantomjs scraper.js", timeout=30)

## Import HTML result
jsscrape <- read_html("Output/lacountycovid.html")
date <- jsscrape %>% 
  html_elements(xpath="/html/body/div[2]/div[1]/div[1]/div[5]/div/p/span[2]") %>% 
  html_text2()

## Add to DF
bur_glen$valid_thru <- date

## trims date
bur_glen$valid_thru <- str_sub(bur_glen$valid_thru, start=-10)
## as date
bur_glen$valid_thru <- mdy(bur_glen$valid_thru)

# Join with data
covidmaster <- read_csv("Output/covidmaster.csv")
covidmaster <- covidmaster %>% 
  merge(bur_glen, all=T) %>% 
  arrange(desc(valid_thru))
write_csv(covidmaster, "Output/covidmaster.csv")

# Burbank only
covidburbank <- covidmaster %>% 
  filter(city_community=="City of Burbank")
write_csv(covidburbank, "Output/covidburbank.csv")