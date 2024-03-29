from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
	"http://localhost:3000",
	"localhost:3000"
]

app.add_middleware(
	CORSMiddleware,
	allow_origins=origins,
	allow_credentials=True,
	allow_methods=["*"],
	allow_headers=["*"]
)

todos = [ 
	{
		"id" : 1,
		"item": "Read a book."
	},
	{
		"id" : 2,
		"item" : "cycling around town."
	}
]

@app.get("/", tags=["root"])
async def read_root() -> dict:
	return {"message": "Welcome to your todo list."}


@app.get("/todo", tags=["todos"])
async def get_todos() -> dict:
	return {"data" : todos}

@app.get("/todo/{id}", tags=["todo"])
async def get_todo_by_id(id: int) -> dict:
	for todo in todos:
		if id == int(todo["id"]):
			return {"data" : todo} 
	return {"data" : f"todo with {id} not found"}

@app.post("/todo", tags=["todo"])
async def add_todo(todo : dict) -> dict:
	todos.append(todo)
	return {"data" : {"Todo Added"}}

@app.put("/todo/{id}", tags=["todos"])
async def update_todo(id: int, body:dict) -> dict:
	for todo in todos:
		if id == int(todo["id"]):
			todo["item"] = body["item"]
			return {
				"data" : f"todo with {id} has been updated"
			}

	return {
		"data" : f"todo with {id} not found"
	}

@app.delete("/todo/{id}", tags=["todo"])
async def delete_todo(id: int) -> dict:
	for todo in todos:
		if id == int(todo["id"]):
			todos.remove(todo)
			return {
				"data" : f"todo with {id} has been deleted"
			}
	return {
		"data" : f"todo with {id} not found"
	}