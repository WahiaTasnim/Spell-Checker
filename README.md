# SpellChecker
A simple spellchecker tool using TextBlob


## Run

To run this project on your [localhost](http://127.0.0.1) you need to follow these steps sequentially & run every command on <em>Terminal or Command Prompt</em>.

> Download this project

To download this project, either make a pull request or click [here](https://github.com/nasimuzzaman-nasim/SpellChecker/archive/master.zip) to download zip file of this project. Now unzip it using proper software like <em>winrar</em>.


> Install these package locally.

To install python3, visit [this  website](https://www.python.org/downloads/).

After installing python3, open <em>Terminal or Command Prompt</em> & Install pip & virtual environment

<u>For Windows</u>

```bash
py -m pip install --upgrade pip
py -m pip install --upgrade virtualenv

```

<u>For Linux</u>

```bash
python3 -m pip install --upgrade pip
python3 -m pip install --upgrade virtualenv
```

> From now on, You will work in the project folder.

Now open up Terminal or Command Prompt on this project where <em>manage.py</em> file belongs and <em>create & activate</em> a virtual environment at that directory using the following command & don’t close Terminal or Command Prompt.

<u>For Windows</u>

```bash
py -m venv venv
.\venv\Scripts\activate
```

<u>For Linux</u>

```bash
python3 -m venv venv
source venv/bin/activate
```



Now use the package manager [pip](https://pip.pypa.io/en/stable/) to install all dependency mention in below.


```bash
pip install Django==2.2.6
pip install django-crispy-forms==1.8.0
pip install pyspellchecker==0.5.2
pip install textblob==0.15.3
python3 -m textblob.download_corpora
```

Hope everything goes well for you & You are all set to run this project on your machine by one command.

For Windows

```bash
py manage.py runserver
```


For Linux

```bash
python3 manage.py runserver
```

Visit [localhost](http://127.0.0.1) to see the project live. Chill!





**If you have any issue with running this project, Feel free to knock me at [Facebook](https://www.messenger.com/t/md.na5imuzzaman)**

Have a nice day!


## Usage

It check misspelled word in your text and suggest you the possible candidate for that word.

**User Interface**
![alt text](https://i.ibb.co/x1RdqP0/Screenshot-from-2019-10-20-12-16-25.png)

Visit [this website](https://ridi-sc.herokuapp.com/) & have a try.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

