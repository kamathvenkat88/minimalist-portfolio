from flask import Flask, render_template, request, redirect, url_for
from pymongo import MongoClient
import ssl 
import requests
import random

app= Flask(__name__, template_folder="templates")
client = MongoClient('mongodb+srv://kamathVenkat:7N1eXZCat17dK9fE@cluster0.qd9tw.mongodb.net/kamathsBlog?retryWrites=true&w=majority&ssl=true', ssl_cert_reqs=ssl.CERT_NONE)
db = client.get_database('kamathsBlog')

@app.route('/') 
def index(): 
	list_blogs = [] 
	collection = db.Blogs
	for document in collection.find({}, {'_id': 0}):
		list_blogs.append(document) 
	list_blogs.reverse() 
	return render_template('index.html', blogs = list_blogs, len_blogs = len(list_blogs))