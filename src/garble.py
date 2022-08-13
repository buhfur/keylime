import random 
import requests 
import time 
import json
import logging
from collections import Counter



#Returns the data needed for running the game e.g ( the letters input for the user, 
#and all the possible anagrams that can be made with said letters )
def get_level_data(levels=6,letter_count=6, min_wlen=3,max_ans=10 ):
    level_data = {}  
    entries = 0
    #test script for querying the anagramica api 
    #keep generating urls until you find "n" urls that match my criteria 

   
    
    for _ in range(levels):
        #TODO: use regular expressions to find the maximum lenght of characters for a 
        #given strings 
        #randomly get n letters 
        letters = [random.choice("abcdefghijklmnopqrstuvwxyz") for _ in range(letter_count)]
        url = f"http://anagramica.com/all/{''.join(letters)}"
        req = requests.get(url)
        response = (req.json())['all'] 
        answers = [x for x in response if len(x) >= min_wlen ]
            #Check if the given reponse has enough words 
        if len(answers) > 7:
            level_data.update({f"{_}":{  "letters":''.join(letters),"answers":answers}})


    return level_data

if __name__ == '__main__':

    with open('levelData.json', 'w+', encoding='utf-8') as answer_data: 
            data = get_level_data() 
            print(data) 
            #answer_data.write(json.dumps(data,indent=4))
            answer_data.writelines(json.dumps(data,indent=4))
