Boot Camp Module 18 Challenge

# Description
This is the weel 18 Module Challenge for the U of M Coding Bootcamp

# NoSQL: Social Network API
This challenge was to build an API for a social network web application where users can share their thoughts, react to friends' thoughts, and add other users to their friends list. 

## User Story
```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria
```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Application Screenshot
### Users
![image](https://github.com/user-attachments/assets/13eb828a-d7e3-4992-86bb-bd12e60a6a51)

### Thoughts
![image](https://github.com/user-attachments/assets/0c217faf-3448-42f2-aabb-7e0b38669f1e)


## Installation Instructions
Prerequisites
- Node.js
- npm
- MongoDB
- Insomnia

1. Clone the repository
   ```bash
   https://github.com/alarrabee/nosql-social-network-api.git
   ```
2. Install dependencies
   ```bash
   npm i
   ```
3. Invoke application
   ```bash
   npm start
   ```

## Demo
[View a video demonstration of this application using Insomnia](https://drive.google.com/file/d/11qO_uj00UUnCTlikLSG_pYEcT31tgqMD/view?usp=sharing)
