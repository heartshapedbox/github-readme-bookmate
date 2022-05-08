import os
os.chdir("C:\\Users\\baben\\Documents\\GitHub\\github-readme-bookmate")
import requests
import re
from bs4 import BeautifulSoup

url = "https://bookmate.com/@babenkodmitry/books/all"

headers = {
"access-control-allow-origin": "*",
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36"
}

request = requests.get(url, headers = headers)
webpage = request.text

with open("C:\\Users\\baben\\Documents\\GitHub\\github-readme-bookmate\\index_src.html", "w", encoding = "utf-8") as file:
    file.write(webpage)

with open("C:\\Users\\baben\\Documents\\GitHub\\github-readme-bookmate\\index_src.html", encoding = "utf-8") as file:
    webpage_text = file.read()

soup=BeautifulSoup(webpage_text, "lxml")
