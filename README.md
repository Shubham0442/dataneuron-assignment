# React Resizable Layout with API Integration
This application is a React-based user interface with a resizable layout, consisting of three components where users can dynamically resize components by dragging them from sides. Additionally, APIs are provided to add and edit data within these components.

## Features
### Resizable Layout
- Three windows with responsive design for all laptop devices.
- Users can resize components by dragging them from side.
- Neighbor windows automatically expand or shrink based on resizing operations.

### API Integration
- API endpoints: /todos and /count.
- /todo/add): allows users to add new data, creating a new entry in the table.
- todos/update: Allows users to update existing data, modifying the entry in the table.
- /count/add: Creates an entry based on window in which first new entry made and initialised the count with 1
- /count/update: Updates count on new entry and updation made to table entries with update button

### Technologies Used
- ReactJS for the frontend.
- Open-source library react-resizable-layout for resizable functionality.
- MongoDB for storing data.
- NodeJs and ExpressJs for API development.

### Installation
- Clone the repository
```bash
  git clone https://github.com/Shubham0442/dataneuron-assignment
```
#### For frontend:
- Navigate to the frontend folder
```bash
cd frontend/
```
- Install dependencies
```bash
npm install
```
- Run the application
```bash
npm start
```
#### For Backend:
- Navigate to the backend folder
```bash
cd backend/
```
- Install dependencies
```bash
npm install
```
- Run the application
```bash
npm run dev
```

### API Endpoints

#### Get Data
- Endpoint: /todos?window={name of window} 
- Method: GET
- Description: gets data of todos in respective window table.
- Parameters:- query: window
- Returns: {data: Array of todos of respective window }

#### Add Data
- Endpoint: /todos/add 
- Method: POST
- Description: adds new data to the respective window table.
- Parameters: name, isCompleted, window
- Returns: {msg: "New todo added"}

#### Edit Data
- Endpoint: /todos/update/:id
- Method: PATCH
- Description: Allows users to update existing data in the respective windowtable.
- Parameters:- param: id, data: window, isCompleted
- Returns: { msg: "todo updated" }

#### Get Count
- Endpoint: /count/?window={name of window}
- Method: GET
- Parameters:- query: window
- Description: Displays the number of times Add and Edit APIs have been called.
- Returns: { data: Array of count of respective window }

#### Update Count
- Endpoint: /count/update/:id
- Method: PATCH
- Parameters:- param: id, count, window
- Description: updates the count value for the respective window on add and update of todos.
- Returns: { msg: "count updated" }

#### Add Count
- Endpoint: /count/add
- Method: POST
- Parameters:- count, window
- Description: adds the count for the  first entry of respective window
- Returns: { msg: "New count added" }

### Database
- MongoDB
- Todos Schema:
```bash
{ name: String, isCompleted: Boolean, window: String }
```

- Count Schema:
```bash
{ count: number, window: String }
```

### Deployment
- frontend: https://data-neuron-assignment.netlify.app/
- backend: https://attractive-cod-gaiters.cyclic.app/