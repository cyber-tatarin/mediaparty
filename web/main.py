# import json
# import os
#
# from aiohttp import web
# import csv
# import io
# import aiohttp_jinja2
# import jinja2
#
# from dotenv import load_dotenv, find_dotenv
#
# env = jinja2.Environment(
#     loader=jinja2.FileSystemLoader('templates'),
#     trim_blocks=True,
#     lstrip_blocks=True,
#     keep_trailing_newline=True
# )
#
#
# @aiohttp_jinja2.template('update_text_form.html')
# async def landing_page(request):
#     return
#
#
# app = web.Application()
# app.add_routes([web.get('/', landing_page)])
#
#
# if __name__ == '__main__':
#     web.run_app(app, host='0.0.0.0')
#
import os.path

from flask import Flask, render_template
import jinja2

app = Flask(__name__)

env = jinja2.Environment(
    loader=jinja2.FileSystemLoader('templates'),
    trim_blocks=True,
    lstrip_blocks=True,
    keep_trailing_newline=True
)


@app.route('/')
def landing_page():
    return render_template('main.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0')
