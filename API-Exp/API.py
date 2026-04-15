import requests

url = 'https://v2.jokeapi.dev/joke/Any'

response = requests.get(url)

if response.status_code != 200:
    print(f"Error: {response.status_code}")
else:
    pass

joke_data = response.json()

print(joke_data['setup'])
print(joke_data['delivery'])


