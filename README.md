# InventoryPilot

## Team Members

**Andy Sun (ID: 40192040)** || Github ID: Irisvella || Email: Andysunham@gmail.com

Christa abou-Arraje (ID: 40226631) || Github ID: christa-ux || Email: christa.arraj@gmail.com

Fatoumata Binta Barry (ID: 40213443) || Github ID: Fatoumatabintabarry  || Email: bintabarry2002@yahoo.ca

Flora Avakian (ID: 40158192) || Github ID: flo351  || Email: flora.avakian@yahoo.ca

Inas Fawzi (ID: 40208675) || Github ID: inas-fawzi || Email: inasfawzi24@gmail.com

Megan Coscia (ID: 40214186) || Github ID: m-coscia || Email: meg.coscia@gmail.com

Nour Hassoun (ID: 40233077) || Github ID: iluvpesto  || Email: n_hassoun3@hotmail.com

Sarah Abellard (ID: 40184667) || Github ID: sarahabellard  || Email: sarahzinea@gmail.com

Suha Abubakr (ID: 40120785) || Github ID: suha-ab || Email: abubakr.suha@gmail.com

Yousef Enein (ID: 40115494) || Github ID: yousefenein  || Email: yousefenein@outlook.com

James Bitharas (ID: 26637175 ) || Github ID: strikeyamato || Email: jamesbitharas@gmail.com

## Setup Guide
### Prerequisites
- Python 3.10 or later
- Node.js 16.x or later

<ins>Note:</ins> To run the backend and frontend, you should run two shells simultaneously. The first shell is for the backend and runs python. The second shell is for the frontend and runs node.

### To run the backend
1. cd WarehousePilot_app\backend
2. pip install -r requirements.txt
3. create the .env file and add the environment variables
4. python manage.py migrate
5. To run the server: python manage.py runserver

### For frontend
1. cd WarehousePilot_app\frontend
2. npm run dev
3. control click on the localhost to open the webpage 


## MIT License
Copyright (c) <2024> <Andy Sun, Christa abou-Arraje, Fatoumata Binta Barry, Flora Avakian, Inas Fawzi, Megan Coscia, Nour Hassoun, Sarah Abellard, Suha Abubakr, Yousef Enein>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Justification of Stack
**Frontend**

React (Vite)

*justification:* It is lightweight and fast. As one of the most widely-used JavaScript libraries, React has an extensive ecosystem of libraries, tools, and resources. This support makes it easy to find solutions and access reliable libraries. React uses a declarative syntax, making code predictable and easy to debug. React’s component-based architecture enables modular development, making code reusable, maintainable, and easier to test. This approach also encourages consistent UI patterns across the application.

**Backend**

Django

*justification:* The main reason we chose Djano is because Django’s Python foundation means it integrates smoothly with popular AI and machine learning libraries like TensorFlow, PyTorch, and scikit-learn. This makes it easy to integrate pre-trained models, manage data pipelines, and run AI tasks. Django provides many built-in features like authentication, ORM (Object-Relational Mapping), form handling, and an admin interface, reducing development time and allowing teams to focus on application-specific functionality. Django offers an out-of-the-box solution for routing, middleware, session handling, and request-response management.

**Database**

Relational, using PostGreSQL

*justification:* Our team members were most familiar with relational databases in comparison to other options such as non-relational databases. This was one of the main reasons we chose to use a relational database. We were mainly deciding between PostGreSQL and MySQL, and went with PostGreSQL in the end due to the majority of team members being more familiar with it.

## Societal Risks
Autonomous decision making of a software is a potential societal risk. As more software makes decisions autonomously (e.g., in self-driving cars or healthcare diagnostics), there are ethical questions about accountability, transparency, and the potential for harmful mistakes. We aim to mitigate this risk by involving human interference at any crucial steps of decision making processes, with the use of machine learning and AI ideally limited to providing suggestions.

Automation may also cause job loss. As software automates tasks across industries, many jobs may be eliminated, potentially leading to widespread unemployment and economic disruption, especially for roles in sectors like manufacturing, retail, and transportation. Seeing as our software touches the manufacturing sector we need to be particularily aware of this risk. For the scope of this project, we do not predict our software would cause job loss since it will focus on facilitating the existing jobs of the employees as CSF (in particular management), rather than completely replacing roles.

## Diversity Statement
Diversity is essential to innovation, especially in the field of software development. Technology shapes our daily lives, and when teams (such as ours) include individuals from varied backgrounds, perspectives, and experiences, we can design solutions that are more equitable and relevant for everyone. Our goal is to contribute to a tech culture where diversity is not only valued but actively nurtured. We believe inclusion fuels creativity and problem-solving.

Creating an environment of diversity and inclusion amongst the members of our own team positively impacts how we build software, by reducing biases that may negatively impact how different users interact with our software.

We will work to ensure that our projects are inclusive and accessible to a diverse range of users. We will work continuously to foster a team culture where every team member feels respected and empowered.

## [Concept Fixtures International](https://www.conceptfixtures.com/en/home/)

CSF is the leading manufacturer of aftermarket parts and accessories in North America, for commercial refrigerators and product displays. 
