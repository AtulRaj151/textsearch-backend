# textsearch-backend
## RestAPI for textSearch
### Description
- An API for insert and search question
- Its having Two Operation 
  - Insert
     - requires 
        - question (STRING)
        - topic  (STRING)
        - tags (ARRAY OF STRING)
     
  - Search
     - Service / Program should be able to retrieve the questions based on the string passed.
The passed string should be matched with <Query> OR <Tags> field of Questions and
if any of these fields of questions has the passed string in them then service / program
should return the question in the searched result.

    - requires
       - tags (STRING)
# Routes
 - Insert
      - **http://localhost:8000** __/api/v1/insert__
          - post request requires the following body as parameter
             - question (String)
             - topic  (String)
             - tags  ( can be Array of String)
 - Search
      - **http://localhost:800** __/api/v1/search/tags__
         - post request requires the following body as parameter
             - tags or query ( Can be string of comma seperated of space seperated Array of String)
 - questions
      - **http://localhost:800** __/api/v1/questions__
          - Get Request to retrieve all the questions
# Requirements:
 - mongodb for backend
 - nodejs
 
 # Installation
    1. clone this repo: git clone https://github.com/AtulRaj151/textsearch-backend.git
    2. npm install
    3. npm start
    4. Visit https://github.com/AtulRaj151/textsearch-frontend.git for frontend UI or Use POSTMAN
    
         
        
       
