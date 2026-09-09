import os
from bs4 import BeautifulSoup
import json
import re
from datetime import datetime

directory = "ncit-lk-crawl/pages"
valid_posts = []

# Date regex (e.g. 2017/11, 2018/10) - we will try to find dates from the URL or content
for filename in os.listdir(directory):
    if filename.endswith(".html") and not filename.startswith("category") and not filename.startswith("author") and not filename.startswith("wp-") and not "__" in filename and not filename in ["index.html", "about-us.html", "contact-us.html", "board.html", "bylaws.html", "projects.html", "services.html", "members.html", "membership.html", "home.html", "calendar.html", "covid19.html", "member-benefits.html", "business-incubation-center.html", "resources.html", "useful-links.html", "ictmemberdirectory.html", "presentation.html", "flood2018.html", "notice-board.html"]:
        filepath = os.path.join(directory, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            soup = BeautifulSoup(f.read(), "html.parser")
            
            # Find title
            title_tag = soup.find("h1", class_="entry-title")
            if not title_tag:
                title_tag = soup.find("title")
                
            title = title_tag.text.strip() if title_tag else filename.replace(".html", "")
            if "NCIT" in title and "-" in title:
                title = title.split("-")[0].strip()
                
            # Content
            content_div = soup.find("div", class_="entry-content")
            content = content_div.text.strip() if content_div else ""
            
            # Date
            date_tag = soup.find("time", class_="entry-date")
            date_str = date_tag.get("datetime", "") if date_tag else ""
            if not date_str:
                date_str = "2020-01-01" # fallback
            else:
                date_str = date_str.split("T")[0]
                
            # Image
            img_tag = soup.find("img", class_="wp-post-image")
            if not img_tag and content_div:
                img_tag = content_div.find("img")
            
            img_url = img_tag.get("src", "") if img_tag else ""
            
            # Check if it's a real post
            if len(content) > 50 and title:
                valid_posts.append({
                    "slug": filename.replace(".html", ""),
                    "title": title,
                    "date": date_str,
                    "imageUrl": img_url
                })

print(f"Found {len(valid_posts)} valid posts.")
for p in valid_posts:
    print(f"- {p['date']}: {p['title']}")
