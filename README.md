# Tohome_Assignment - Create Data from API (Option 2)

# Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/anasri12/Tohome_Assignment.git
```

2. Install dependencies:

```bash
npm install
```

# How to Run the Server

Development:

```bash
npm run dev
```

Production:

```bash
npm run build
npm start
```

Server will start at:  
<http://localhost:3000>

# Sample Requests using Postman

Method: GET  
URL: <http://localhost:3000/api/transformData>

```
{
    "Engineering": {
        "male": 2,
        "female": 2,
        "ageRange": "26-40",
        "hair": {
            "Brown": 1,
            "White": 1,
            "Red": 1,
            "Gray": 1
        },
        "addressUser": {
            "EmilyJohnson": "29112",
            "AlexanderJones": "86684",
            "NoahHernandez": "73696",
            "MadisonCollins": "62091"
        }
    },
    "Support": {
        "male": 4,
        "female": 1,
        "ageRange": "33-45",
        "hair": {
            "Green": 1,
            "Blonde": 2,
            "Purple": 1,
            "Blue": 1
        },
        "addressUser": {
            "MichaelWilliams": "38807",
            "JamesDavis": "68354",
            "EthanMartinez": "72360",
            "EvelynSanchez": "43423",
            "DanielCook": "58781"
        }
    },
    ...
}
```
