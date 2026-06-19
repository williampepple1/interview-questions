const questions = [
    {
        "id": 1,
        "topic": "Python / Backend",
        "question": "How do you connect a Python app to a PostgreSQL database?",
        "answer": "You can use libraries like psycopg2, SQLAlchemy, or an ORM like Django\u2019s ORM.\n\n\n\nWith psycopg2:\n\n\n\nimport psycopg2\n\n\n\nconn = psycopg2.connect(\n\n    dbname=\"test_db\", user=\"user\", password=\"pass\", host=\"localhost\"\n\n)\n\ncursor = conn.cursor()\n\ncursor.execute(\"SELECT * FROM users\")\n\nrows = cursor.fetchall()"
    },
    {
        "id": 2,
        "topic": "Python / Backend",
        "question": "What is SQLAlchemy?",
        "answer": "SQLAlchemy is a popular ORM and SQL toolkit.\n\n\n\nLets you write Python classes to represent DB tables.\n\n\n\nfrom sqlalchemy import create_engine, Column, Integer, String\n\nfrom sqlalchemy.orm import declarative_base, sessionmaker\n\n\n\nBase = declarative_base()\n\n\n\nclass User(Base):\n\n    __tablename__ = \"users\"\n\n    id = Column(Integer, primary_key=True)\n\n    name = Column(String)\n\n\n\nengine = create_engine(\"sqlite:///db.sqlite3\")\n\nSession = sessionmaker(bind=engine)"
    },
    {
        "id": 3,
        "topic": "Python / Backend",
        "question": "How do migrations work in Django?",
        "answer": "Django tracks model changes and generates migration files.\n\n\n\nCommands:\n\n\n\npython manage.py makemigrations\n\npython manage.py migrate\n\nMigrations are version-controlled and stored in the migrations/ directory of each app."
    },
    {
        "id": 4,
        "topic": "Python / Backend",
        "question": "How do you handle database migrations with Alembic (SQLAlchemy)?",
        "answer": "Alembic is the recommended tool for SQLAlchemy migrations.\n\n\n\nalembic init alembic\n\nalembic revision --autogenerate -m \"add user table\"\n\nalembic upgrade head\n\nEdit env.py to link your SQLAlchemy models."
    },
    {
        "id": 5,
        "topic": "Python / Backend",
        "question": "How do you write unit tests in Python?",
        "answer": "Use the built-in unittest or pytest.\n\n\n\nimport unittest\n\n\n\nclass TestMath(unittest.TestCase):\n\n    def test_add(self):\n\n        self.assertEqual(1 + 1, 2)\n\n\n\nif __name__ == '__main__':\n\n    unittest.main()"
    },
    {
        "id": 6,
        "topic": "Python / Backend",
        "question": "What\u2019s the difference between unit, integration, and functional tests?",
        "answer": "Unit: Test individual functions/classes (fast).\n\n\n\nIntegration: Test how components work together (DB, APIs).\n\n\n\nFunctional: End-to-end tests from user\u2019s perspective."
    },
    {
        "id": 7,
        "topic": "Python / Backend",
        "question": "How do you mock in Python tests?",
        "answer": "Use unittest.mock or pytest-mock to replace parts of your code for testing.\n\n\n\nfrom unittest.mock import patch\n\n\n\n@patch(\"module.function_to_mock\")\n\ndef test_call(mock_func):\n\n    mock_func.return_value = \"test\"\n\n    assert module.function_to_mock() == \"test\""
    },
    {
        "id": 8,
        "topic": "Python / Backend",
        "question": "How do you test FastAPI endpoints?",
        "answer": "Use TestClient from FastAPI:\n\n\n\nfrom fastapi.testclient import TestClient\n\nfrom app import app\n\n\n\nclient = TestClient(app)\n\n\n\ndef test_home():\n\n    response = client.get(\"/\")\n\n    assert response.status_code == 200"
    },
    {
        "id": 9,
        "topic": "Python / Backend",
        "question": "What is a fixture in pytest?",
        "answer": "Fixtures provide reusable setup for tests.\n\n\n\nimport pytest\n\n\n\n@pytest.fixture\n\ndef sample_data():\n\n    return {\"name\": \"Alice\"}\n\n\n\ndef test_user(sample_data):\n\n    assert sample_data[\"name\"] == \"Alice\""
    },
    {
        "id": 10,
        "topic": "Python / Backend",
        "question": "What\u2019s the difference between @staticmethod and @classmethod?",
        "answer": "@staticmethod: Doesn\u2019t access class or instance.\n\n\n\n@classmethod: Takes cls as first argument.\n\n\n\nclass MyClass:\n\n    @staticmethod\n\n    def say_hi():\n\n        return \"Hi\"\n\n\n\n    @classmethod\n\n    def create(cls):\n\n        return cls()"
    },
    {
        "id": 11,
        "topic": "Python / Backend",
        "question": "How do you deploy a Python web app with Gunicorn and Nginx?",
        "answer": "Gunicorn serves your app:\n\n\n\ngunicorn app:app\n\nNginx handles incoming traffic and proxies to Gunicorn:\n\n\n\nlocation / {\n\n    proxy_pass http://127.0.0.1:8000;\n\n}\n\nUse systemd to manage Gunicorn as a service."
    },
    {
        "id": 12,
        "topic": "Python / Backend",
        "question": "What is WSGI vs ASGI?",
        "answer": "WSGI (Web Server Gateway Interface)\tASGI (Asynchronous Server Gateway Interface)\n\nSynchronous only\tSupports both sync and async\n\nUsed by Flask, Django (default)\tUsed by FastAPI, Django (with channels)\n\nASGI is better for WebSockets and async APIs."
    },
    {
        "id": 13,
        "topic": "Python / Backend",
        "question": "How do you containerize a Python app using Docker?",
        "answer": "Dockerfile:\n\n\n\nFROM python:3.10\n\nWORKDIR /app\n\nCOPY . .\n\nRUN pip install -r requirements.txt\n\nCMD [\"python\", \"main.py\"]\n\nBuild and run:\n\n\n\ndocker build -t myapp .\n\ndocker run -p 8000:8000 myapp"
    },
    {
        "id": 14,
        "topic": "Python / Backend",
        "question": "What\u2019s the difference between a virtual environment and Docker?",
        "answer": "Virtual environment isolates Python packages.\n\n\n\nDocker isolates the entire OS environment (Python version, libs, dependencies).\n\n\n\nUse both together for full reproducibility."
    },
    {
        "id": 15,
        "topic": "Python / Backend",
        "question": "How do you schedule background jobs in Python?",
        "answer": "Use Celery with Redis or RabbitMQ.\n\n\n\n@app.task\n\ndef send_email(to):\n\n    ...\n\nOr use APScheduler or schedule for lightweight jobs."
    },
    {
        "id": 16,
        "topic": "Python / Backend",
        "question": "What\u2019s the difference between threading and multiprocessing?",
        "answer": "Threading: Multiple threads within the same process (shared memory, GIL).\n\n\n\nMultiprocessing: Separate processes (true parallelism).\n\n\n\nUse threading for I/O-bound, multiprocessing for CPU-bound tasks."
    },
    {
        "id": 17,
        "topic": "Python / Backend",
        "question": "How does Python handle memory management?",
        "answer": "Automatic via reference counting and garbage collection (gc module).\n\n\n\nObjects are stored in a heap.\n\n\n\nThe gc module handles cyclic references."
    },
    {
        "id": 18,
        "topic": "Python / Backend",
        "question": "What is the GIL?",
        "answer": "Global Interpreter Lock\n\n\n\nOnly one thread executes Python bytecode at a time.\n\n\n\nLimits true parallelism in multi-threaded CPU-bound programs.\n\n\n\nWorkaround: use multiprocessing or native extensions."
    },
    {
        "id": 19,
        "topic": "Python / Backend",
        "question": "How do you work with queues in Python?",
        "answer": "Use the queue module:\n\n\n\nfrom queue import Queue\n\n\n\nq = Queue()\n\nq.put(1)\n\nitem = q.get()\n\nUse multiprocessing.Queue for inter-process communication."
    },
    {
        "id": 20,
        "topic": "Python / Backend",
        "question": "What are generators and how are they useful?",
        "answer": "Use yield to return values lazily.\n\n\n\nSaves memory by generating items on the fly.\n\n\n\ndef countdown(n):\n\n    while n > 0:\n\n        yield n\n\n        n -= 1\n\nLet me know when you're ready for the final batch: Questions 71\u2013100!\n\n\n\n\n\nI am ready\n\n\n\nPerfect \u2014 here\u2019s the final batch: Questions 71\u2013100 with detailed answers!"
    },
    {
        "id": 21,
        "topic": "Python / Backend",
        "question": "What are Python decorators and how do you use them?",
        "answer": "Decorators are functions that wrap another function to modify its behavior.\n\n\n\ndef decorator(func):\n\n    def wrapper():\n\n        print(\"Before\")\n\n        func()\n\n        print(\"After\")\n\n    return wrapper\n\n\n\n@decorator\n\ndef greet():\n\n    print(\"Hello\")\n\nUse cases: logging, authentication, caching, etc."
    },
    {
        "id": 22,
        "topic": "Python / Backend",
        "question": "What is a closure in Python?",
        "answer": "A closure is a function that remembers variables from its enclosing scope even after that scope has finished.\n\n\n\ndef outer(x):\n\n    def inner():\n\n        return x\n\n    return inner\n\n\n\nf = outer(10)\n\nprint(f())  # 10"
    },
    {
        "id": 23,
        "topic": "Python / Backend",
        "question": "What is the __init__.py file used for?",
        "answer": "Marks a directory as a Python package.\n\n\n\nCan also contain package-level variables or initialization code."
    },
    {
        "id": 24,
        "topic": "Python / Backend",
        "question": "What are magic methods in Python?",
        "answer": "Special methods with double underscores (dunder methods) used to customize class behavior.\n\n\n\nExamples:\n\n\n\n__init__: Constructor\n\n\n\n__str__: String representation\n\n\n\n__len__, __getitem__, __eq__\n\n\n\nclass User:\n\n    def __str__(self):\n\n        return \"User instance\""
    },
    {
        "id": 25,
        "topic": "Python / Backend",
        "question": "What is the difference between is and ==?",
        "answer": "is: Checks identity (same memory location).\n\n\n\n==: Checks equality (same value).\n\n\n\na = [1]\n\nb = [1]\n\na == b  # True\n\na is b  # False"
    },
    {
        "id": 26,
        "topic": "Python / Backend",
        "question": "How do you use Python\u2019s typing module?",
        "answer": "Provides type hints for functions and variables.\n\n\n\nfrom typing import List, Dict\n\n\n\ndef add(numbers: List[int]) -> int:\n\n    return sum(numbers)\n\nSupports Optional, Union, Tuple, etc."
    },
    {
        "id": 27,
        "topic": "Python / Backend",
        "question": "What is the difference between shallow and deep copy?",
        "answer": "Shallow copy: Only the top-level object is copied.\n\n\n\nDeep copy: Copies all nested objects too.\n\n\n\nimport copy\n\ncopy.copy(obj)\n\ncopy.deepcopy(obj)"
    },
    {
        "id": 28,
        "topic": "Python / Backend",
        "question": "How do you serialize and deserialize data in Python?",
        "answer": "Use json for strings, pickle for Python objects.\n\n\n\nimport json\n\n\n\ndata = {\"name\": \"Bob\"}\n\njson_str = json.dumps(data)\n\nback_to_dict = json.loads(json_str)"
    },
    {
        "id": 29,
        "topic": "Python / Backend",
        "question": "How do you handle CORS in a Python backend?",
        "answer": "In Flask:\n\n\n\nfrom flask_cors import CORS\n\napp = Flask(__name__)\n\nCORS(app)\n\nIn FastAPI:\n\n\n\nfrom fastapi.middleware.cors import CORSMiddleware\n\n\n\napp.add_middleware(\n\n    CORSMiddleware,\n\n    allow_origins=[\"*\"],\n\n    allow_methods=[\"*\"],\n\n    allow_headers=[\"*\"]\n\n)"
    },
    {
        "id": 30,
        "topic": "Python / Backend",
        "question": "How do you store passwords securely in a Python app?",
        "answer": "Never store plaintext passwords.\n\n\n\nUse bcrypt or passlib to hash them.\n\n\n\nfrom passlib.hash import bcrypt\n\n\n\nhashed = bcrypt.hash(\"mysecret\")\n\nbcrypt.verify(\"mysecret\", hashed)"
    },
    {
        "id": 31,
        "topic": "Python / Backend",
        "question": "How do you implement rate limiting in Python APIs?",
        "answer": "Use tools like:\n\n\n\nFlask-Limiter\n\n\n\nFastAPI-limiter\n\n\n\nReverse proxies like Nginx or Cloudflare\n\n\n\nFastAPI example (Redis backend):\n\n\n\nfrom fastapi_limiter import FastAPILimiter"
    },
    {
        "id": 32,
        "topic": "Python / Backend",
        "question": "What is middleware in a Python web framework?",
        "answer": "Code that runs before or after request handlers to:\n\n\n\nModify requests/responses\n\n\n\nLog requests\n\n\n\nHandle errors\n\n\n\nIn FastAPI:\n\n\n\n@app.middleware(\"http\")\n\nasync def log_request(request, call_next):\n\n    response = await call_next(request)\n\n    return response"
    },
    {
        "id": 33,
        "topic": "Python / Backend",
        "question": "What are some tools for profiling Python code?",
        "answer": "cProfile: Standard tool\n\n\n\nline_profiler: Line-by-line analysis\n\n\n\nmemory_profiler: Memory usage\n\n\n\npy-spy: Live profiler"
    },
    {
        "id": 34,
        "topic": "Python / Backend",
        "question": "What is the difference between str(), repr(), and __str__/__repr__?",
        "answer": "str(): User-friendly string\n\n\n\nrepr(): Developer-focused string (valid Python code if possible)\n\n\n\n__str__: What str() calls\n\n\n\n__repr__: What repr() calls (used in debugging)"
    },
    {
        "id": 35,
        "topic": "Python / Backend",
        "question": "What is monkey patching in Python?",
        "answer": "Dynamically changing behavior of a function/class at runtime.\n\n\n\nimport module\n\n\n\nmodule.some_func = lambda: \"patched\"\n\nUse with caution; often a code smell."
    },
    {
        "id": 36,
        "topic": "Python / Backend",
        "question": "How does inheritance work in Python?",
        "answer": "A class can inherit from another class:\n\n\n\nclass Animal:\n\n    def speak(self): print(\"sound\")\n\n\n\nclass Dog(Animal):\n\n    def speak(self): print(\"woof\")\n\nSupports multiple inheritance and super()."
    },
    {
        "id": 37,
        "topic": "Python / Backend",
        "question": "How do you handle dependency injection in Python?",
        "answer": "Use libraries like dependency-injector or manual injection.\n\n\n\nManual:\n\n\n\nclass Service:\n\n    def __init__(self, db): self.db = db\n\nFrameworks like FastAPI support DI natively."
    },
    {
        "id": 38,
        "topic": "Python / Backend",
        "question": "What are namedtuples and dataclasses?",
        "answer": "namedtuple: Lightweight immutable data containers.\n\n\n\nfrom collections import namedtuple\n\nUser = namedtuple(\"User\", [\"name\", \"age\"])\n\ndataclass: Provides default methods like __init__, __repr__.\n\n\n\nfrom dataclasses import dataclass\n\n@dataclass\n\nclass User:\n\n    name: str\n\n    age: int"
    },
    {
        "id": 39,
        "topic": "Python / Backend",
        "question": "What is a metaclass in Python?",
        "answer": "A metaclass is a class of a class \u2014 it defines how classes behave.\n\n\n\nclass Meta(type):\n\n    def __new__(cls, name, bases, dct):\n\n        return super().__new__(cls, name, bases, dct)\n\nUse cases: class registries, ORMs, enforcing rules."
    },
    {
        "id": 40,
        "topic": "Python / Backend",
        "question": "What is a contextvars and when is it useful?",
        "answer": "Used to manage context-local state in async apps (like thread-locals, but for async).\n\n\n\nimport contextvars\n\nuser_id = contextvars.ContextVar('user_id')\n\nUseful in FastAPI for user/session-scoped state."
    },
    {
        "id": 41,
        "topic": "Python / Backend",
        "question": "What is the Python Global Interpreter Lock (GIL)?",
        "answer": "Prevents multiple native threads from executing Python bytecode at once.\n\n\n\nLimits performance for CPU-bound multi-threaded apps.\n\n\n\nDoesn\u2019t affect multiprocessing."
    },
    {
        "id": 42,
        "topic": "Python / Backend",
        "question": "What are common performance bottlenecks in Python apps?",
        "answer": "Blocking I/O\n\n\n\nDatabase latency\n\n\n\nOveruse of threads under GIL\n\n\n\nUnoptimized loops or large data\n\n\n\nPoor choice of data structures\n\n\n\nUse profiling tools to find slow areas."
    },
    {
        "id": 43,
        "topic": "Python / Backend",
        "question": "How do you implement WebSockets in Python?",
        "answer": "FastAPI example:\n\n\n\nfrom fastapi import WebSocket\n\n\n\n@app.websocket(\"/ws\")\n\nasync def websocket_endpoint(ws: WebSocket):\n\n    await ws.accept()\n\n    while True:\n\n        data = await ws.receive_text()\n\n        await ws.send_text(f\"You said: {data}\")"
    },
    {
        "id": 44,
        "topic": "Python / Backend",
        "question": "How do you version APIs in a Python backend?",
        "answer": "Prefix routes: /api/v1/users\n\n\n\nSeparate routers/modules per version\n\n\n\nUse API gateway if scaling multiple services"
    },
    {
        "id": 45,
        "topic": "Python / Backend",
        "question": "How do you paginate API results?",
        "answer": "Manual:\n\n\n\noffset = (page - 1) * limit\n\ndata = db.query().offset(offset).limit(limit)\n\nUse libraries like:\n\n\n\nFlask-Restful pagination\n\n\n\nFastAPI pagination"
    },
    {
        "id": 46,
        "topic": "Python / Backend",
        "question": "What are Python wheels (.whl)?",
        "answer": "Binary package format for Python.\n\n\n\nFaster installation than source distribution.\n\n\n\npip install some_package.whl"
    },
    {
        "id": 47,
        "topic": "Python / Backend",
        "question": "What is a virtual environment and why is it important?",
        "answer": "Isolated environment for Python packages.\n\n\n\nPrevents dependency conflicts between projects.\n\n\n\npython -m venv venv\n\nsource venv/bin/activate"
    },
    {
        "id": 48,
        "topic": "Python / Backend",
        "question": "What is PEP8 and how do you enforce it?",
        "answer": "PEP8: Python style guide (naming, indentation, imports, etc.)\n\n\n\nTools: flake8, black, pylint"
    },
    {
        "id": 49,
        "topic": "Python / Backend",
        "question": "How do you handle errors in FastAPI?",
        "answer": "Custom exception:\n\n\n\nfrom fastapi import HTTPException\n\n\n\n@app.get(\"/item/{id}\")\n\ndef get_item(id: int):\n\n    if id not in db:\n\n        raise HTTPException(status_code=404, detail=\"Not found\")"
    },
    {
        "id": 50,
        "topic": "Python / Backend",
        "question": "What are some best practices for building Python backends?",
        "answer": "Use virtual environments\n\n\n\nFollow clean architecture (separate concerns)\n\n\n\nValidate input (e.g., Pydantic)\n\n\n\nUse async for I/O\n\n\n\nWrite tests\n\n\n\nHandle errors gracefully\n\n\n\nSecure endpoints (auth, rate limiting)\n\n\n\nUse logging and monitoring\n\n\n\nThat\u2019s all 100 questions and answers!\n\nWant me to compile this into a single PDF, cheat sheet, or flashcard format?\n\n\n\n\n\nUsing python, what are the sorting algorithms? Give me the examples, give me their average time complexity on the average, best and worst case\n\n\n\nHere\u2019s a list of common sorting algorithms in Python, including examples and time complexities (best, average, worst):"
    },
    {
        "id": 51,
        "topic": "Python / Backend",
        "question": "Bubble Sort",
        "answer": "\ud83d\udd01 Simple, inefficient, compares adjacent elements and swaps if needed.\n\ndef bubble_sort(arr):\n\n    n = len(arr)\n\n    for i in range(n):\n\n        for j in range(0, n - i - 1):\n\n            if arr[j] > arr[j+1]:\n\n                arr[j], arr[j+1] = arr[j+1], arr[j]\n\nBest: O(n) (already sorted)\n\n\n\nAverage: O(n\u00b2)\n\n\n\nWorst: O(n\u00b2)"
    },
    {
        "id": 52,
        "topic": "Python / Backend",
        "question": "Selection Sort",
        "answer": "\ud83d\udd01 Repeatedly finds the minimum element and puts it at the beginning.\n\ndef selection_sort(arr):\n\n    for i in range(len(arr)):\n\n        min_idx = i\n\n        for j in range(i+1, len(arr)):\n\n            if arr[j] < arr[min_idx]:\n\n                min_idx = j\n\n        arr[i], arr[min_idx] = arr[min_idx], arr[i]\n\nBest: O(n\u00b2)\n\n\n\nAverage: O(n\u00b2)\n\n\n\nWorst: O(n\u00b2)"
    },
    {
        "id": 53,
        "topic": "Python / Backend",
        "question": "Insertion Sort",
        "answer": "\ud83d\udd01 Builds the sorted array one element at a time.\n\ndef insertion_sort(arr):\n\n    for i in range(1, len(arr)):\n\n        key = arr[i]\n\n        j = i - 1\n\n        while j >= 0 and arr[j] > key:\n\n            arr[j+1] = arr[j]\n\n            j -= 1\n\n        arr[j+1] = key\n\nBest: O(n) (already sorted)\n\n\n\nAverage: O(n\u00b2)\n\n\n\nWorst: O(n\u00b2)"
    },
    {
        "id": 54,
        "topic": "Python / Backend",
        "question": "Merge Sort",
        "answer": "\ud83e\uddec Divide and conquer \u2014 splits list and merges sorted halves.\n\ndef merge_sort(arr):\n\n    if len(arr) > 1:\n\n        mid = len(arr) // 2\n\n        L = arr[:mid]\n\n        R = arr[mid:]\n\n        \n\n        merge_sort(L)\n\n        merge_sort(R)\n\n        \n\n        i = j = k = 0\n\n        while i < len(L) and j < len(R):\n\n            if L[i] < R[j]:\n\n                arr[k] = L[i]\n\n                i += 1\n\n            else:\n\n                arr[k] = R[j]\n\n                j += 1\n\n            k += 1\n\n            \n\n        while i < len(L):\n\n            arr[k] = L[i]\n\n            i += 1\n\n            k += 1\n\n            \n\n        while j < len(R):\n\n            arr[k] = R[j]\n\n            j += 1\n\n            k += 1\n\nBest: O(n log n)\n\n\n\nAverage: O(n log n)\n\n\n\nWorst: O(n log n)"
    },
    {
        "id": 55,
        "topic": "Python / Backend",
        "question": "Quick Sort",
        "answer": "\u26a1\ufe0f Divide and conquer using a pivot.\n\ndef quick_sort(arr):\n\n    if len(arr) <= 1:\n\n        return arr\n\n    pivot = arr[0]\n\n    left = [x for x in arr[1:] if x < pivot]\n\n    right = [x for x in arr[1:] if x >= pivot]\n\n    return quick_sort(left) + [pivot] + quick_sort(right)\n\nBest: O(n log n)\n\n\n\nAverage: O(n log n)\n\n\n\nWorst: O(n\u00b2) (when pivot is smallest or largest repeatedly)"
    },
    {
        "id": 56,
        "topic": "Python / Backend",
        "question": "Heap Sort",
        "answer": "\u26cf Uses heap data structure.\n\nimport heapq\n\n\n\ndef heap_sort(arr):\n\n    heapq.heapify(arr)\n\n    return [heapq.heappop(arr) for _ in range(len(arr))]\n\nBest: O(n log n)\n\n\n\nAverage: O(n log n)\n\n\n\nWorst: O(n log n)\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nClaim offer\n\n\n\nGenerate 50 JavaScript questions and answers\n\n\n\nHere\u2019s a set of 50 JavaScript interview-style questions and answers to help you practice:\n\n\n\nBasic Concepts\n\nQ: What is JavaScript?\n\nA: JavaScript is a high-level, interpreted programming language primarily used to make web pages interactive. It\u2019s part of the web\u2019s core technologies alongside HTML and CSS.\n\n\n\nQ: Is JavaScript the same as Java?\n\nA: No. Despite the similar name, JavaScript and Java are different languages. Java is a compiled, statically typed language, while JavaScript is interpreted and dynamically typed.\n\n\n\nQ: What are JavaScript data types?\n\nA: Primitive types: string, number, bigint, boolean, undefined, symbol, null. Non-primitive: object (including arrays, functions, dates).\n\n\n\nQ: What is the difference between == and ===?\n\nA: == checks for equality after type coercion, while === checks for equality without type conversion (strict equality).\n\n\n\nQ: What is typeof null?\n\nA: \"object\". This is a well-known bug in JavaScript\u2019s implementation.\n\n\n\nQ: What is NaN in JavaScript?\n\nA: NaN stands for \"Not-a-Number\". It represents an invalid number result, like 0/0.\n\n\n\nQ: How do you check if a value is NaN?\n\nA: Use Number.isNaN(value) instead of isNaN(value) to avoid false positives.\n\n\n\nQ: What is the difference between undefined and null?\n\nA: undefined means a variable has been declared but not assigned a value. null is an assigned value that represents \u201cno value\u201d.\n\n\n\nQ: What are truthy and falsy values?\n\nA: Falsy values are: false, 0, \"\", null, undefined, and NaN. Everything else is truthy.\n\n\n\nQ: What is hoisting in JavaScript?\n\nA: Hoisting is JavaScript\u2019s behavior of moving variable and function declarations to the top of their scope before execution.\n\n\n\nFunctions & Scope\n\nQ: What are function expressions vs function declarations?\n\nA: A function declaration is hoisted and can be called before it appears in code, while a function expression is assigned to a variable and is not hoisted.\n\n\n\nQ: What is an arrow function?\n\nA: A concise way of writing functions using ()=>, which does not bind its own this.\n\n\n\nQ: What is the difference between var, let, and const?\n\nA: var is function-scoped, hoisted, and can be redeclared. let is block-scoped and can be reassigned but not redeclared. const is block-scoped and cannot be reassigned.\n\n\n\nQ: What is closure in JavaScript?\n\nA: A closure is a function that retains access to its lexical scope even after the outer function has finished executing.\n\n\n\nQ: Give an example of a closure.\n\nA:\n\n\n\nfunction outer() {\n\n  let counter = 0;\n\n  return function() {\n\n    counter++;\n\n    return counter;\n\n  };\n\n}\n\nconst add = outer();\n\nadd(); // 1\n\nadd(); // 2\n\nQ: What is the difference between global scope and block scope?\n\nA: Global scope is accessible everywhere, while block scope is limited to {} blocks (like in if or for).\n\n\n\nQ: What does this keyword mean?\n\nA: this refers to the object that is executing the function. In strict mode, this in a standalone function is undefined.\n\n\n\nQ: How does this behave in arrow functions?\n\nA: Arrow functions inherit this from their surrounding lexical scope.\n\n\n\nQ: What is the difference between a pure function and an impure function?\n\nA: A pure function always produces the same output for the same input and has no side effects. An impure function can depend on external state or cause side effects.\n\n\n\nQ: What is recursion in JavaScript?\n\nA: When a function calls itself until a base condition is met.\n\n\n\nObjects & Arrays\n\nQ: How do you create an object in JavaScript?\n\nA: Using object literals:\n\n\n\nlet obj = {name: \"John\", age: 30};\n\nQ: What is object destructuring?\n\nA: Extracting properties into variables:\n\n\n\nconst {name, age} = obj;\n\nQ: How do you clone an object?\n\nA:\n\n\n\nShallow clone: Object.assign({}, obj) or {...obj}\n\n\n\nDeep clone: structuredClone(obj) (modern JS) or using JSON.\n\n\n\nQ: How do you merge objects?\n\nA: Object.assign(obj1, obj2) or {...obj1, ...obj2}.\n\n\n\nQ: How do you check if a property exists in an object?\n\nA: \"key\" in obj or obj.hasOwnProperty(\"key\").\n\n\n\nQ: How do you loop through object properties?\n\nA:\n\n\n\nfor (let key in obj) console.log(key, obj[key]);\n\nQ: What is an array in JavaScript?\n\nA: A list-like object used to store multiple values, indexed starting from 0.\n\n\n\nQ: How do you add/remove elements from an array?\n\nA: push, pop, shift, unshift, or splice.\n\n\n\nQ: What is the difference between map and forEach?\n\nA: forEach executes a function for each element but returns undefined. map creates and returns a new array with modified values.\n\n\n\nQ: How do you flatten a nested array?\n\nA:\n\n\n\nlet flat = arr.flat(Infinity);\n\nAsynchronous JavaScript\n\nQ: What is the difference between synchronous and asynchronous code?\n\nA: Synchronous code runs sequentially, blocking further execution until complete. Asynchronous code allows other tasks to run while waiting for an operation to finish.\n\n\n\nQ: What is a callback function?\n\nA: A function passed into another function to be executed later.\n\n\n\nQ: What are Promises in JavaScript?\n\nA: Promises represent a value that will be resolved (fulfilled or rejected) in the future.\n\n\n\nQ: What are the states of a Promise?\n\nA: Pending, Fulfilled, and Rejected.\n\n\n\nQ: What is async/await?\n\nA: Syntax sugar over Promises, allowing asynchronous code to look synchronous.\n\n\n\nQ: Example of async/await:\n\n\n\nasync function fetchData() {\n\n  let response = await fetch(\"url\");\n\n  let data = await response.json();\n\n  return data;\n\n}\n\nQ: What is the difference between Promise.all and Promise.race?\n\nA: Promise.all waits for all promises to resolve, while Promise.race resolves/rejects as soon as the first promise settles.\n\n\n\nQ: What is the event loop?\n\nA: The event loop manages execution of JavaScript code, handling the call stack and message queue, enabling asynchronous behavior.\n\n\n\nQ: What is a microtask vs macrotask?\n\nA: Microtasks (e.g., Promises) run before macrotasks (e.g., setTimeout) in the event loop.\n\n\n\nQ: What is setTimeout and setInterval?\n\nA: setTimeout executes code once after a delay. setInterval repeatedly executes code after a given delay.\n\n\n\nAdvanced Concepts\n\nQ: What is event delegation?\n\nA: Attaching a single event listener to a parent element to handle events on its child elements via bubbling.\n\n\n\nQ: What is the difference between shallow copy and deep copy?\n\nA: Shallow copy copies only references for nested objects, while deep copy creates independent copies of all levels.\n\n\n\nQ: What are JavaScript modules?\n\nA: ES6 introduced modules using export and import to organize code into reusable files.\n\n\n\nQ: What are generators in JavaScript?\n\nA: Functions defined with function* that can yield multiple values over time.\n\n\n\nQ: What is Symbol in JavaScript?\n\nA: A unique and immutable primitive used as object property keys.\n\n\n\nQ: What is strict mode in JavaScript?\n\nA: A way to opt into a restricted version of JS, catching silent errors and disallowing unsafe features.\n\n\n\nQ: What is prototypal inheritance?\n\nA: Objects in JavaScript can inherit properties and methods from another object via the prototype chain.\n\n\n\nQ: What is the difference between call, apply, and bind?\n\nA:\n\n\n\ncall: invokes a function with arguments passed individually.\n\n\n\napply: invokes with arguments as an array.\n\n\n\nbind: returns a new function with this permanently bound.\n\n\n\nQ: What is memoization?\n\nA: An optimization technique where results of expensive function calls are cached and returned when the same inputs occur again.\n\n\n\nQ: What is a JavaScript engine?\n\nA: A program (like V8 in Chrome, SpiderMonkey in Firefox) that executes JavaScript code by compiling it to machine code.\n\n\n\nWould you like me to expand this into a structured interview prep guide (e.g., 50 beginner, 50 intermediate, 50 advanced), or keep giving them in sets of 50 like this?\n\n\n\n\n\ncontinue with 50 more\n\n\n\nI need 50 more\n\n\n\nGot it \ud83d\udc4d Here\u2019s another 50 JavaScript interview questions with answers (this will bring your total to 200):\n\n\n\nJavaScript Interview Questions (151\u2013200)\n\n151. What is the difference between for...of and for...in loops?\n\n\n\nfor...in iterates over enumerable property keys of an object.\n\n\n\nfor...of iterates over values of an iterable (like arrays, strings, maps).\n\n\n\n152. What is the difference between slice() and splice() in JavaScript?\n\n\n\nslice(start, end) returns a shallow copy without modifying the original array.\n\n\n\nsplice(start, deleteCount, ...items) changes the original array by adding/removing elements.\n\n\n\n153. What are higher-order functions?\n\nFunctions that take other functions as arguments or return a function. Example: map(), filter(), reduce().\n\n\n\n154. Explain the concept of \"event delegation\".\n\nEvent delegation is attaching a single event listener to a parent element to manage events on its child elements using event bubbling.\n\n\n\n155. What is the difference between synchronous and asynchronous code?\n\n\n\nSynchronous code executes sequentially.\n\n\n\nAsynchronous code allows other tasks to run while waiting (e.g., with setTimeout, Promises).\n\n\n\n156. What is a WeakSet in JavaScript?\n\nA collection of objects only (no primitives), with weak references, meaning objects can be garbage collected if no references exist.\n\n\n\n157. What is a WeakMap in JavaScript?\n\nSimilar to Map, but keys must be objects, and references are weak, allowing garbage collection.\n\n\n\n158. What is the difference between == and Object.is()?\n\n\n\n== performs type coercion before comparison.\n\n\n\nObject.is() is like === but treats NaN as equal and +0 and -0 as different.\n\n\n\n159. What is the difference between window.onload and DOMContentLoaded?\n\n\n\nwindow.onload waits for the whole page (including images and styles) to load.\n\n\n\nDOMContentLoaded triggers when the HTML is parsed.\n\n\n\n160. What are template literals in JavaScript?\n\nString literals enclosed in backticks (`) that allow interpolation (${value}) and multi-line strings.\n\n\n\n161. What is an IIFE (Immediately Invoked Function Expression)?\n\nA function that runs immediately after being defined:\n\n\n\n(function() { console.log(\"IIFE\"); })();\n\n162. Explain the difference between localStorage and sessionStorage.\n\n\n\nlocalStorage persists data even after closing the browser.\n\n\n\nsessionStorage persists only during the tab session.\n\n\n\n163. What is the difference between null and undefined?\n\n\n\nnull is an intentional empty value.\n\n\n\nundefined means a variable has been declared but not assigned.\n\n\n\n164. What is the difference between Object.freeze() and Object.seal()?\n\n\n\nfreeze() prevents adding, deleting, or modifying properties.\n\n\n\nseal() allows modifying existing properties but prevents adding/removing.\n\n\n\n165. What are tagged template literals?\n\nFunctions that process template literals:\n\n\n\nfunction tag(strings, ...values) { return values.join(\"-\"); }\n\ntag`Hello ${\"World\"}!`; // \"World\"\n\n166. What is typeof NaN?\n\nIt is \"number\".\n\n\n\n167. What is the difference between shallow copy and deep copy?\n\n\n\nShallow copy copies references for nested objects.\n\n\n\nDeep copy creates independent copies of all nested objects.\n\n\n\n168. What is the difference between function expressions and function declarations?\n\n\n\nDeclarations are hoisted and available before execution.\n\n\n\nExpressions are not hoisted.\n\n\n\n169. What is event bubbling?\n\nThe process where an event starts from the target element and bubbles up through ancestors.\n\n\n\n170. What is event capturing?\n\nThe opposite of bubbling: events are captured from ancestors down to the target.\n\n\n\n171. What is the difference between async/await and Promises?\n\n\n\nasync/await is syntactic sugar over Promises, making asynchronous code look synchronous.\n\n\n\nPromises use .then() chaining.\n\n\n\n172. What is the difference between Array.find() and Array.filter()?\n\n\n\nfind() returns the first matching element.\n\n\n\nfilter() returns all matching elements as an array.\n\n\n\n173. What is the difference between Object.assign() and spread syntax {...obj}?\n\nBoth copy properties, but spread syntax is more concise and can\u2019t copy property descriptors.\n\n\n\n174. What are private fields in JavaScript classes?\n\nFields prefixed with # inside classes that cannot be accessed outside.\n\n\n\nclass Person { #name = \"John\"; }\n\n175. What is the difference between flat() and flatMap() in arrays?\n\n\n\nflat() flattens nested arrays.\n\n\n\nflatMap() maps each element and then flattens the result one level.\n\n\n\n176. What is the difference between charAt() and charCodeAt()?\n\n\n\ncharAt() returns the character at a given index.\n\n\n\ncharCodeAt() returns the Unicode value.\n\n\n\n177. What is the difference between function currying and partial application?\n\n\n\nCurrying transforms a function into a series of functions each taking one argument.\n\n\n\nPartial application fixes some arguments while leaving others open.\n\n\n\n178. What is the difference between isNaN() and Number.isNaN()?\n\n\n\nisNaN() coerces to number before checking.\n\n\n\nNumber.isNaN() checks only if value is exactly NaN.\n\n\n\n179. What is the difference between Object.create() and {}?\n\n\n\n{} creates an object with Object.prototype.\n\n\n\nObject.create(proto) allows custom prototypes.\n\n\n\n180. What are JavaScript iterables?\n\nObjects implementing the Symbol.iterator method, e.g., arrays, strings, maps.\n\n\n\n181. What is the difference between Map and plain objects?\n\n\n\nMap can have any value type as keys.\n\n\n\nObjects have only strings/symbols as keys.\n\n\n\n182. What is a generator function?\n\nA function defined with function* that can pause (yield) and resume.\n\n\n\n183. What is the difference between next() in generator and async iterators?\n\n\n\nGenerators return { value, done }.\n\n\n\nAsync iterators return a Promise resolving to { value, done }.\n\n\n\n184. What are async generators?\n\nGenerators that can yield Promises and use for await...of loops.\n\n\n\n185. What is the difference between apply() and call()?\n\n\n\ncall(thisArg, ...args) passes arguments individually.\n\n\n\napply(thisArg, [args]) passes arguments as an array.\n\n\n\n186. What is the difference between bind() and call()?\n\n\n\ncall() invokes immediately.\n\n\n\nbind() returns a new function with bound context.\n\n\n\n187. What is a Proxy in JavaScript?\n\nAn object that wraps another object and intercepts operations like get, set.\n\n\n\n188. What are JavaScript Symbols used for?\n\nUnique identifiers that avoid property name collisions.\n\n\n\n189. What is the difference between Object.keys() and Object.getOwnPropertyNames()?\n\n\n\nObject.keys() returns enumerable keys.\n\n\n\nObject.getOwnPropertyNames() returns all own keys (enumerable or not).\n\n\n\n190. What is Object.defineProperty() used for?\n\nDefines or modifies property descriptors (writable, enumerable, configurable).\n\n\n\n191. What are getter and setter methods in JavaScript?\n\nSpecial methods to access or update properties dynamically:\n\n\n\nclass User { get name() {} set name(v) {} }\n\n192. What is the difference between Object.seal() and Object.preventExtensions()?\n\n\n\nseal() prevents adding/removing properties but allows modification.\n\n\n\npreventExtensions() only prevents adding new properties.\n\n\n\n193. What are async functions?\n\nFunctions declared with async that always return a Promise.\n\n\n\n194. What is the difference between microtasks and macrotasks?\n\n\n\nMicrotasks: Promises, MutationObserver (executed before rendering).\n\n\n\nMacrotasks: setTimeout, setInterval, setImmediate.\n\n\n\n195. What is the difference between throttling and debouncing?\n\n\n\nThrottling ensures a function is called at most once per time interval.\n\n\n\nDebouncing delays execution until inactivity for a set period.\n\n\n\n196. What are service workers in JavaScript?\n\nScripts running in the background for caching, offline support, push notifications.\n\n\n\n197. What is the difference between innerHTML, innerText, and textContent?\n\n\n\ninnerHTML: parses HTML.\n\n\n\ninnerText: returns visible text only.\n\n\n\ntextContent: returns all text including hidden.\n\n\n\n198. What is the difference between passive event listeners and regular ones?\n\n\n\nPassive listeners ({ passive: true }) indicate that preventDefault() won\u2019t be called, improving scroll performance.\n\n\n\n199. What is the difference between shallow equality and deep equality?\n\n\n\nShallow equality compares only first-level properties.\n\n\n\nDeep equality recursively compares all nested properties.\n\n\n\n200. What is the difference between tree-shaking and dead code elimination?\n\n\n\nTree-shaking removes unused exports during bundling.\n\n\n\nDead code elimination removes unreachable code after optimizations.\n\n\n\n\u2705 That\u2019s 200 JavaScript Q&A in total (4 sets of 50).\n\n\n\nDo you want me to keep going until we hit 500 JavaScript questions like we did with Python, or do you want to mix these with Node.js-specific questions next?\n\n\n\n\n\nI need 50 more\n\n\n\nGot it \ud83d\udc4d Here\u2019s another 50 JavaScript interview questions and answers for you:\n\n\n\nJavaScript Interview Questions (Set 9: 401\u2013450)\n\nWhat is the difference between undefined and not defined in JavaScript?\n\n\n\nundefined: A variable is declared but not assigned a value.\n\n\n\nnot defined: A variable hasn\u2019t been declared at all.\n\n\n\nWhat does the this keyword refer to in strict mode in a function?\n\n\n\nIn strict mode, this is undefined instead of pointing to the global object.\n\n\n\nWhat is the difference between innerHTML and textContent?\n\n\n\ninnerHTML parses and renders HTML.\n\n\n\ntextContent only returns plain text.\n\n\n\nWhat does the super keyword do in classes?\n\n\n\nIt calls the parent class\u2019s constructor or methods.\n\n\n\nWhat is the Temporal Dead Zone (TDZ)?\n\n\n\nThe time between entering scope and variable initialization where accessing a let or const variable throws a ReferenceError.\n\n\n\nWhat is a higher-order function?\n\n\n\nA function that takes another function as an argument or returns a function.\n\n\n\nHow do you copy an object in JavaScript without reference?\n\n\n\nUsing structuredClone(obj) or JSON.parse(JSON.stringify(obj)).\n\n\n\nWhat is a pure function?\n\n\n\nA function that always returns the same output for the same input and has no side effects.\n\n\n\nWhat are tagged template literals?\n\n\n\nA way to customize how template literals are processed by defining a tag function.\n\n\n\nWhat is a generator function?\n\n\n\nA function defined with function* that can yield multiple values using the yield keyword.\n\n\n\nWhat is the purpose of Symbol in JavaScript?\n\n\n\nTo create unique and immutable identifiers, often used as object property keys.\n\n\n\nWhat is the difference between shallow copy and deep copy?\n\n\n\nShallow copy copies only top-level properties.\n\n\n\nDeep copy recursively copies nested objects.\n\n\n\nWhat is the difference between var a = b = 5; and var a = 5, b = 5;?\n\n\n\nvar a = b = 5; assigns b to global scope (if not declared).\n\n\n\nvar a = 5, b = 5; declares both in local scope.\n\n\n\nWhat is the difference between synchronous and asynchronous code?\n\n\n\nSynchronous executes line by line.\n\n\n\nAsynchronous allows other tasks to run while waiting for completion.\n\n\n\nWhat are WeakMap and WeakSet?\n\n\n\nCollections similar to Map and Set, but keys are weakly referenced and eligible for garbage collection.\n\n\n\nWhy is typeof NaN equal to \"number\"?\n\n\n\nBecause NaN is technically a numeric type, though it means \"Not-a-Number\".\n\n\n\nWhat does the void operator do?\n\n\n\nEvaluates an expression and returns undefined.\n\n\n\nWhat are default parameters in JavaScript functions?\n\n\n\nParameters that take a default value if no argument is passed.\n\n\n\nWhat is short-circuit evaluation in JavaScript?\n\n\n\nUsing || and && operators to return values without evaluating further.\n\n\n\nWhat is the difference between a for...of loop and a for...in loop?\n\n\n\nfor...of: Iterates values of iterables (arrays, strings).\n\n\n\nfor...in: Iterates enumerable property keys of objects.\n\n\n\nWhat is a service worker?\n\n\n\nA script that runs in the background, intercepting network requests for caching and offline functionality.\n\n\n\nWhat is an Immediately Invoked Function Expression (IIFE)?\n\n\n\nA function that runs immediately after being defined.\n\n\n\nWhat is the difference between DOMContentLoaded and load events?\n\n\n\nDOMContentLoaded: Fires when HTML is loaded.\n\n\n\nload: Fires after all resources (images, scripts) are loaded.\n\n\n\nWhat is the difference between splice and slice in arrays?\n\n\n\nslice: Returns a shallow copy.\n\n\n\nsplice: Modifies the original array.\n\n\n\nWhat does the map() method do in arrays?\n\n\n\nCreates a new array by applying a function to each element.\n\n\n\nWhat does the filter() method do in arrays?\n\n\n\nReturns a new array with elements that pass a test function.\n\n\n\nWhat does the reduce() method do in arrays?\n\n\n\nReduces array values into a single result based on a reducer function.\n\n\n\nWhat is the difference between some() and every() in arrays?\n\n\n\nsome(): Returns true if at least one element passes.\n\n\n\nevery(): Returns true if all elements pass.\n\n\n\nWhat is the difference between shallow equality (==) and strict equality (===)?\n\n\n\n==: Performs type coercion.\n\n\n\n===: Checks type and value.\n\n\n\nWhat is the difference between null and undefined in comparisons?\n\n\n\nnull == undefined is true.\n\n\n\nnull === undefined is false.\n\n\n\nWhat are modules in JavaScript?\n\n\n\nFiles that export and import code using export and import.\n\n\n\nWhat are ES6 classes syntactic sugar for?\n\n\n\nJavaScript prototypes.\n\n\n\nWhat is the difference between Object.freeze() and Object.seal()?\n\n\n\nfreeze: Prevents adding, deleting, or modifying properties.\n\n\n\nseal: Prevents adding/deleting but allows modifying.\n\n\n\nWhat does Object.assign() do?\n\n\n\nCopies properties from one or more source objects to a target object.\n\n\n\nWhat is a polyfill?\n\n\n\nCode that adds missing functionality in older browsers.\n\n\n\nWhat are decorators in JavaScript (proposal stage)?\n\n\n\nFunctions that add metadata or modify behavior of classes and methods.\n\n\n\nWhat is an event delegation pattern?\n\n\n\nAttaching one event listener to a parent element to handle events on child elements.\n\n\n\nWhat is the difference between bubbling and capturing in event propagation?\n\n\n\nBubbling: Events propagate upward.\n\n\n\nCapturing: Events propagate downward before target.\n\n\n\nWhat is the difference between throttling and debouncing?\n\n\n\nThrottling: Limits function execution to once per interval.\n\n\n\nDebouncing: Delays execution until after a pause in activity.\n\n\n\nWhat is the difference between async function and normal functions?\n\n\n\nasync functions return promises and allow await.\n\n\n\nWhat is an event loop tick?\n\n\n\nA single cycle of checking and executing tasks in the JavaScript event loop.\n\n\n\nWhat is a Promise.all()?\n\n\n\nExecutes multiple promises in parallel and resolves when all succeed.\n\n\n\nWhat is Promise.race()?\n\n\n\nResolves or rejects as soon as the first promise settles.\n\n\n\nWhat is Promise.allSettled()?\n\n\n\nResolves when all promises settle, regardless of success or failure.\n\n\n\nWhat is Promise.any()?\n\n\n\nResolves when the first promise succeeds.\n\n\n\nWhat are async iterators in JavaScript?\n\n\n\nIterators that work with await in loops.\n\n\n\nWhat is top-level await?\n\n\n\nAllows await at the top level of ES modules.\n\n\n\nWhat is an import alias in JavaScript?\n\n\n\nRenaming imports using import { func as newName } from 'module'.\n\n\n\nWhat is dynamic import in JavaScript?\n\n\n\nImporting modules on demand using import().\n\n\n\nWhat is tree shaking in JavaScript bundlers?\n\n\n\nRemoving unused code during bundling.\n\n\n\n\u2705 That brings us to 450 JavaScript questions so far.\n\n\n\nDo you want me to continue until we hit 500 questions, or should I stop at 450?\n\n\n\n\n\nI need 50 more\n\n\n\nGot it \ud83d\udc4d Here\u2019s another 50 JavaScript questions and answers to continue your prep:\n\n\n\nJavaScript Interview Questions (Batch 10: 451\u2013500)\n\nCore Concepts\n\nWhat is the difference between null and undefined?\n\n\n\nnull is an intentional absence of value.\n\n\n\nundefined means a variable is declared but not assigned.\n\n\n\nWhat is a WeakMap in JavaScript?\n\nA WeakMap is a collection of key-value pairs where keys are objects, and references to keys are weak (garbage-collectable).\n\n\n\nWhat is a WeakSet?\n\nWeakSet stores only objects and holds weak references, allowing garbage collection.\n\n\n\nWhat is the difference between shallow copy and deep copy in JavaScript?\n\n\n\nShallow copy: Copies only references for nested objects.\n\n\n\nDeep copy: Recursively copies all nested structures.\n\n\n\nWhat are truthy and falsy values?\n\nFalsy values: false, 0, \"\", null, undefined, NaN. Everything else is truthy.\n\n\n\nWhat is the with statement in JavaScript? Why is it discouraged?\n\nThe with statement extends the scope chain for an object. It is discouraged because it causes ambiguity and reduces performance.\n\n\n\nWhat is event delegation?\n\nAttaching a single event listener on a parent element to handle events from child elements using event bubbling.\n\n\n\nWhat are higher-order functions?\n\nFunctions that take other functions as arguments or return them.\n\n\n\nExplain the concept of a pure function.\n\nA pure function always returns the same output for the same inputs and has no side effects.\n\n\n\nWhat is memoization in JavaScript?\n\nAn optimization technique where results of expensive function calls are cached.\n\n\n\nFunctions & Closures\n\nWhat are generator functions?\n\nFunctions defined with function* that can yield multiple values and be paused/resumed.\n\n\n\nHow do you create an immediately invoked function expression (IIFE)?\n\n\n\n(function() {\n\n  console.log(\"IIFE executed\");\n\n})();\n\nWhat is the difference between function and function*?\n\nfunction* creates a generator function that returns an iterator.\n\n\n\nHow does JavaScript handle recursion?\n\nThrough the function call stack, until stack overflow occurs if too deep.\n\n\n\nWhat are arrow function limitations?\n\n\n\nNo arguments object\n\n\n\nNo this binding\n\n\n\nCannot be used as constructors\n\n\n\nWhat is a callback function?\n\nA function passed as an argument to another function, invoked later.\n\n\n\nWhat is the difference between callbacks and promises?\n\nCallbacks use functions, Promises provide a structured way of chaining async operations.\n\n\n\nWhat is async/await sugar for?\n\nIt is syntactic sugar for handling Promises in a synchronous-like way.\n\n\n\nWhat is tail call optimization (TCO)?\n\nA technique where recursive calls reuse the current stack frame, avoiding stack overflow. Not widely supported in JS.\n\n\n\nWhat is the difference between synchronous and asynchronous execution?\n\n\n\nSynchronous: Tasks execute one after another.\n\n\n\nAsynchronous: Tasks can run independently, not blocking execution.\n\n\n\nObjects & Prototypes\n\nWhat is a mixin in JavaScript?\n\nA pattern where properties/methods from one object are copied into another.\n\n\n\nWhat is Object.assign used for?\n\nCopies values of enumerable properties from source objects to a target object.\n\n\n\nWhat is the difference between Object.seal and Object.freeze?\n\n\n\nseal: Prevents adding/removing properties, but allows modification.\n\n\n\nfreeze: Prevents adding/removing/modifying properties.\n\n\n\nWhat does Object.preventExtensions do?\n\nPrevents new properties from being added to an object.\n\n\n\nWhat is prototypal inheritance?\n\nObjects can inherit properties and methods from another object via their prototype chain.\n\n\n\nWhat is the difference between in and hasOwnProperty?\n\n\n\nin: Checks if a property exists in the object or prototype.\n\n\n\nhasOwnProperty: Checks only the object itself.\n\n\n\nHow do you clone an object in JavaScript?\n\n\n\nShallow: Object.assign({}, obj) or {...obj}\n\n\n\nDeep: JSON.parse(JSON.stringify(obj)) (with limitations)\n\n\n\nWhat are symbols in JavaScript?\n\nUnique and immutable primitive values used as object property keys.\n\n\n\nHow do you make an object immutable in JavaScript?\n\nUse Object.freeze(obj).\n\n\n\nWhat is duck typing in JavaScript?\n\nDetermining an object\u2019s suitability by checking for certain properties/methods rather than its type.\n\n\n\nDOM & Events\n\nWhat is the difference between innerHTML and textContent?\n\n\n\ninnerHTML: Returns/sets HTML markup.\n\n\n\ntextContent: Returns/sets only text.\n\n\n\nWhat is the difference between getElementById and querySelect\n<truncated 35225 bytes>\n\nNOTE: The output was truncated because it was too long. Use a more targeted query or a smaller range to get the information you need."
    },
    {
        "id": 57,
        "topic": "JavaScript",
        "question": "What is JavaScript?",
        "answer": "JavaScript is a high-level, interpreted programming language primarily used to make web pages interactive. It\u2019s part of the web\u2019s core technologies alongside HTML and CSS."
    },
    {
        "id": 58,
        "topic": "JavaScript",
        "question": "Is JavaScript the same as Java?",
        "answer": "No. Despite the similar name, JavaScript and Java are different languages. Java is a compiled, statically typed language, while JavaScript is interpreted and dynamically typed."
    },
    {
        "id": 59,
        "topic": "JavaScript",
        "question": "What are JavaScript data types?",
        "answer": "Primitive types: string, number, bigint, boolean, undefined, symbol, null. Non-primitive: object (including arrays, functions, dates)."
    },
    {
        "id": 60,
        "topic": "JavaScript",
        "question": "What is the difference between == and ===?",
        "answer": "== checks for equality after type coercion, while === checks for equality without type conversion (strict equality)."
    },
    {
        "id": 61,
        "topic": "JavaScript",
        "question": "What is typeof null?",
        "answer": "\"object\". This is a well-known bug in JavaScript\u2019s implementation."
    },
    {
        "id": 62,
        "topic": "JavaScript",
        "question": "What is NaN in JavaScript?",
        "answer": "NaN stands for \"Not-a-Number\". It represents an invalid number result, like 0/0."
    },
    {
        "id": 63,
        "topic": "JavaScript",
        "question": "How do you check if a value is NaN?",
        "answer": "Use Number.isNaN(value) instead of isNaN(value) to avoid false positives."
    },
    {
        "id": 64,
        "topic": "JavaScript",
        "question": "What is the difference between undefined and null?",
        "answer": "undefined means a variable has been declared but not assigned a value. null is an assigned value that represents \u201cno value\u201d."
    },
    {
        "id": 65,
        "topic": "JavaScript",
        "question": "What are truthy and falsy values?",
        "answer": "Falsy values are: false, 0, \"\", null, undefined, and NaN. Everything else is truthy."
    },
    {
        "id": 66,
        "topic": "JavaScript",
        "question": "What is hoisting in JavaScript?",
        "answer": "Hoisting is JavaScript\u2019s behavior of moving variable and function declarations to the top of their scope before execution.\n\n\n\nFunctions & Scope"
    },
    {
        "id": 67,
        "topic": "JavaScript",
        "question": "What are function expressions vs function declarations?",
        "answer": "A function declaration is hoisted and can be called before it appears in code, while a function expression is assigned to a variable and is not hoisted."
    },
    {
        "id": 68,
        "topic": "JavaScript",
        "question": "What is an arrow function?",
        "answer": "A concise way of writing functions using ()=>, which does not bind its own this."
    },
    {
        "id": 69,
        "topic": "JavaScript",
        "question": "What is the difference between var, let, and const?",
        "answer": "var is function-scoped, hoisted, and can be redeclared. let is block-scoped and can be reassigned but not redeclared. const is block-scoped and cannot be reassigned."
    },
    {
        "id": 70,
        "topic": "JavaScript",
        "question": "What is closure in JavaScript?",
        "answer": "A closure is a function that retains access to its lexical scope even after the outer function has finished executing."
    },
    {
        "id": 71,
        "topic": "JavaScript",
        "question": "Give an example of a closure.",
        "answer": "function outer() {\n\n  let counter = 0;\n\n  return function() {\n\n    counter++;\n\n    return counter;\n\n  };\n\n}\n\nconst add = outer();\n\nadd(); // 1\n\nadd(); // 2"
    },
    {
        "id": 72,
        "topic": "JavaScript",
        "question": "What is the difference between global scope and block scope?",
        "answer": "Global scope is accessible everywhere, while block scope is limited to {} blocks (like in if or for)."
    },
    {
        "id": 73,
        "topic": "JavaScript",
        "question": "What does this keyword mean?",
        "answer": "this refers to the object that is executing the function. In strict mode, this in a standalone function is undefined."
    },
    {
        "id": 74,
        "topic": "JavaScript",
        "question": "How does this behave in arrow functions?",
        "answer": "Arrow functions inherit this from their surrounding lexical scope."
    },
    {
        "id": 75,
        "topic": "JavaScript",
        "question": "What is the difference between a pure function and an impure function?",
        "answer": "A pure function always produces the same output for the same input and has no side effects. An impure function can depend on external state or cause side effects."
    },
    {
        "id": 76,
        "topic": "JavaScript",
        "question": "What is recursion in JavaScript?",
        "answer": "When a function calls itself until a base condition is met.\n\n\n\nObjects & Arrays"
    },
    {
        "id": 77,
        "topic": "JavaScript",
        "question": "How do you create an object in JavaScript?",
        "answer": "Using object literals:\n\n\n\nlet obj = {name: \"John\", age: 30};"
    },
    {
        "id": 78,
        "topic": "JavaScript",
        "question": "What is object destructuring?",
        "answer": "Extracting properties into variables:\n\n\n\nconst {name, age} = obj;"
    },
    {
        "id": 79,
        "topic": "JavaScript",
        "question": "How do you clone an object?",
        "answer": "Shallow clone: Object.assign({}, obj) or {...obj}\n\n\n\nDeep clone: structuredClone(obj) (modern JS) or using JSON."
    },
    {
        "id": 80,
        "topic": "JavaScript",
        "question": "How do you merge objects?",
        "answer": "Object.assign(obj1, obj2) or {...obj1, ...obj2}."
    },
    {
        "id": 81,
        "topic": "JavaScript",
        "question": "How do you check if a property exists in an object?",
        "answer": "\"key\" in obj or obj.hasOwnProperty(\"key\")."
    },
    {
        "id": 82,
        "topic": "JavaScript",
        "question": "How do you loop through object properties?",
        "answer": "for (let key in obj) console.log(key, obj[key]);"
    },
    {
        "id": 83,
        "topic": "JavaScript",
        "question": "What is an array in JavaScript?",
        "answer": "A list-like object used to store multiple values, indexed starting from 0."
    },
    {
        "id": 84,
        "topic": "JavaScript",
        "question": "How do you add/remove elements from an array?",
        "answer": "push, pop, shift, unshift, or splice."
    },
    {
        "id": 85,
        "topic": "JavaScript",
        "question": "What is the difference between map and forEach?",
        "answer": "forEach executes a function for each element but returns undefined. map creates and returns a new array with modified values."
    },
    {
        "id": 86,
        "topic": "JavaScript",
        "question": "How do you flatten a nested array?",
        "answer": "let flat = arr.flat(Infinity);\n\nAsynchronous JavaScript"
    },
    {
        "id": 87,
        "topic": "JavaScript",
        "question": "What is the difference between synchronous and asynchronous code?",
        "answer": "Synchronous code runs sequentially, blocking further execution until complete. Asynchronous code allows other tasks to run while waiting for an operation to finish."
    },
    {
        "id": 88,
        "topic": "JavaScript",
        "question": "What is a callback function?",
        "answer": "A function passed into another function to be executed later."
    },
    {
        "id": 89,
        "topic": "JavaScript",
        "question": "What are Promises in JavaScript?",
        "answer": "Promises represent a value that will be resolved (fulfilled or rejected) in the future."
    },
    {
        "id": 90,
        "topic": "JavaScript",
        "question": "What are the states of a Promise?",
        "answer": "Pending, Fulfilled, and Rejected."
    },
    {
        "id": 91,
        "topic": "JavaScript",
        "question": "What is async/await?",
        "answer": "Syntax sugar over Promises, allowing asynchronous code to look synchronous."
    },
    {
        "id": 92,
        "topic": "JavaScript",
        "question": "Example of async/await:\n\n\n\nasync function fetchData() {\n\n  let response = await fetch(\"url\");\n\n  let data = await response.json();\n\n  return data;\n\n}\n\nQ: What is the difference between Promise.all and Promise.race?",
        "answer": "Promise.all waits for all promises to resolve, while Promise.race resolves/rejects as soon as the first promise settles."
    },
    {
        "id": 93,
        "topic": "JavaScript",
        "question": "What is the event loop?",
        "answer": "The event loop manages execution of JavaScript code, handling the call stack and message queue, enabling asynchronous behavior."
    },
    {
        "id": 94,
        "topic": "JavaScript",
        "question": "What is a microtask vs macrotask?",
        "answer": "Microtasks (e.g., Promises) run before macrotasks (e.g., setTimeout) in the event loop."
    },
    {
        "id": 95,
        "topic": "JavaScript",
        "question": "What is setTimeout and setInterval?",
        "answer": "setTimeout executes code once after a delay. setInterval repeatedly executes code after a given delay.\n\n\n\nAdvanced Concepts"
    },
    {
        "id": 96,
        "topic": "JavaScript",
        "question": "What is event delegation?",
        "answer": "Attaching a single event listener to a parent element to handle events on its child elements via bubbling."
    },
    {
        "id": 97,
        "topic": "JavaScript",
        "question": "What is the difference between shallow copy and deep copy?",
        "answer": "Shallow copy copies only references for nested objects, while deep copy creates independent copies of all levels."
    },
    {
        "id": 98,
        "topic": "JavaScript",
        "question": "What are JavaScript modules?",
        "answer": "ES6 introduced modules using export and import to organize code into reusable files."
    },
    {
        "id": 99,
        "topic": "JavaScript",
        "question": "What are generators in JavaScript?",
        "answer": "Functions defined with function* that can yield multiple values over time."
    },
    {
        "id": 100,
        "topic": "JavaScript",
        "question": "What is Symbol in JavaScript?",
        "answer": "A unique and immutable primitive used as object property keys."
    },
    {
        "id": 101,
        "topic": "JavaScript",
        "question": "What is strict mode in JavaScript?",
        "answer": "A way to opt into a restricted version of JS, catching silent errors and disallowing unsafe features."
    },
    {
        "id": 102,
        "topic": "JavaScript",
        "question": "What is prototypal inheritance?",
        "answer": "Objects in JavaScript can inherit properties and methods from another object via the prototype chain."
    },
    {
        "id": 103,
        "topic": "JavaScript",
        "question": "What is the difference between call, apply, and bind?",
        "answer": "call: invokes a function with arguments passed individually.\n\n\n\napply: invokes with arguments as an array.\n\n\n\nbind: returns a new function with this permanently bound."
    },
    {
        "id": 104,
        "topic": "JavaScript",
        "question": "What is memoization?",
        "answer": "An optimization technique where results of expensive function calls are cached and returned when the same inputs occur again."
    },
    {
        "id": 105,
        "topic": "JavaScript",
        "question": "What is a JavaScript engine?",
        "answer": "A program (like V8 in Chrome, SpiderMonkey in Firefox) that executes JavaScript code by compiling it to machine code.\n\n\n\nWould you like me to expand this into a structured interview prep guide (e.g., 50 beginner, 50 intermediate, 50 advanced), or keep giving them in sets of 50 like this?\n\n\n\n\n\ncontinue with 50 more\n\n\n\nI need 50 more\n\n\n\nGot it \ud83d\udc4d Here\u2019s another 50 JavaScript interview questions with answers (this will bring your total to 200):\n\n\n\nJavaScript Interview Questions (151\u2013200)\n\n151. What is the difference between for...of and for...in loops?\n\n\n\nfor...in iterates over enumerable property keys of an object.\n\n\n\nfor...of iterates over values of an iterable (like arrays, strings, maps).\n\n\n\n152. What is the difference between slice() and splice() in JavaScript?\n\n\n\nslice(start, end) returns a shallow copy without modifying the original array.\n\n\n\nsplice(start, deleteCount, ...items) changes the original array by adding/removing elements.\n\n\n\n153. What are higher-order functions?\n\nFunctions that take other functions as arguments or return a function. Example: map(), filter(), reduce().\n\n\n\n154. Explain the concept of \"event delegation\".\n\nEvent delegation is attaching a single event listener to a parent element to manage events on its child elements using event bubbling.\n\n\n\n155. What is the difference between synchronous and asynchronous code?\n\n\n\nSynchronous code executes sequentially.\n\n\n\nAsynchronous code allows other tasks to run while waiting (e.g., with setTimeout, Promises).\n\n\n\n156. What is a WeakSet in JavaScript?\n\nA collection of objects only (no primitives), with weak references, meaning objects can be garbage collected if no references exist.\n\n\n\n157. What is a WeakMap in JavaScript?\n\nSimilar to Map, but keys must be objects, and references are weak, allowing garbage collection.\n\n\n\n158. What is the difference between == and Object.is()?\n\n\n\n== performs type coercion before comparison.\n\n\n\nObject.is() is like === but treats NaN as equal and +0 and -0 as different.\n\n\n\n159. What is the difference between window.onload and DOMContentLoaded?\n\n\n\nwindow.onload waits for the whole page (including images and styles) to load.\n\n\n\nDOMContentLoaded triggers when the HTML is parsed.\n\n\n\n160. What are template literals in JavaScript?\n\nString literals enclosed in backticks (`) that allow interpolation (${value}) and multi-line strings.\n\n\n\n161. What is an IIFE (Immediately Invoked Function Expression)?\n\nA function that runs immediately after being defined:\n\n\n\n(function() { console.log(\"IIFE\"); })();\n\n162. Explain the difference between localStorage and sessionStorage.\n\n\n\nlocalStorage persists data even after closing the browser.\n\n\n\nsessionStorage persists only during the tab session.\n\n\n\n163. What is the difference between null and undefined?\n\n\n\nnull is an intentional empty value.\n\n\n\nundefined means a variable has been declared but not assigned.\n\n\n\n164. What is the difference between Object.freeze() and Object.seal()?\n\n\n\nfreeze() prevents adding, deleting, or modifying properties.\n\n\n\nseal() allows modifying existing properties but prevents adding/removing.\n\n\n\n165. What are tagged template literals?\n\nFunctions that process template literals:\n\n\n\nfunction tag(strings, ...values) { return values.join(\"-\"); }\n\ntag`Hello ${\"World\"}!`; // \"World\"\n\n166. What is typeof NaN?\n\nIt is \"number\".\n\n\n\n167. What is the difference between shallow copy and deep copy?\n\n\n\nShallow copy copies references for nested objects.\n\n\n\nDeep copy creates independent copies of all nested objects.\n\n\n\n168. What is the difference between function expressions and function declarations?\n\n\n\nDeclarations are hoisted and available before execution.\n\n\n\nExpressions are not hoisted.\n\n\n\n169. What is event bubbling?\n\nThe process where an event starts from the target element and bubbles up through ancestors.\n\n\n\n170. What is event capturing?\n\nThe opposite of bubbling: events are captured from ancestors down to the target.\n\n\n\n171. What is the difference between async/await and Promises?\n\n\n\nasync/await is syntactic sugar over Promises, making asynchronous code look synchronous.\n\n\n\nPromises use .then() chaining.\n\n\n\n172. What is the difference between Array.find() and Array.filter()?\n\n\n\nfind() returns the first matching element.\n\n\n\nfilter() returns all matching elements as an array.\n\n\n\n173. What is the difference between Object.assign() and spread syntax {...obj}?\n\nBoth copy properties, but spread syntax is more concise and can\u2019t copy property descriptors.\n\n\n\n174. What are private fields in JavaScript classes?\n\nFields prefixed with # inside classes that cannot be accessed outside.\n\n\n\nclass Person { #name = \"John\"; }\n\n175. What is the difference between flat() and flatMap() in arrays?\n\n\n\nflat() flattens nested arrays.\n\n\n\nflatMap() maps each element and then flattens the result one level.\n\n\n\n176. What is the difference between charAt() and charCodeAt()?\n\n\n\ncharAt() returns the character at a given index.\n\n\n\ncharCodeAt() returns the Unicode value.\n\n\n\n177. What is the difference between function currying and partial application?\n\n\n\nCurrying transforms a function into a series of functions each taking one argument.\n\n\n\nPartial application fixes some arguments while leaving others open.\n\n\n\n178. What is the difference between isNaN() and Number.isNaN()?\n\n\n\nisNaN() coerces to number before checking.\n\n\n\nNumber.isNaN() checks only if value is exactly NaN.\n\n\n\n179. What is the difference between Object.create() and {}?\n\n\n\n{} creates an object with Object.prototype.\n\n\n\nObject.create(proto) allows custom prototypes.\n\n\n\n180. What are JavaScript iterables?\n\nObjects implementing the Symbol.iterator method, e.g., arrays, strings, maps.\n\n\n\n181. What is the difference between Map and plain objects?\n\n\n\nMap can have any value type as keys.\n\n\n\nObjects have only strings/symbols as keys.\n\n\n\n182. What is a generator function?\n\nA function defined with function* that can pause (yield) and resume.\n\n\n\n183. What is the difference between next() in generator and async iterators?\n\n\n\nGenerators return { value, done }.\n\n\n\nAsync iterators return a Promise resolving to { value, done }.\n\n\n\n184. What are async generators?\n\nGenerators that can yield Promises and use for await...of loops.\n\n\n\n185. What is the difference between apply() and call()?\n\n\n\ncall(thisArg, ...args) passes arguments individually.\n\n\n\napply(thisArg, [args]) passes arguments as an array.\n\n\n\n186. What is the difference between bind() and call()?\n\n\n\ncall() invokes immediately.\n\n\n\nbind() returns a new function with bound context.\n\n\n\n187. What is a Proxy in JavaScript?\n\nAn object that wraps another object and intercepts operations like get, set.\n\n\n\n188. What are JavaScript Symbols used for?\n\nUnique identifiers that avoid property name collisions.\n\n\n\n189. What is the difference between Object.keys() and Object.getOwnPropertyNames()?\n\n\n\nObject.keys() returns enumerable keys.\n\n\n\nObject.getOwnPropertyNames() returns all own keys (enumerable or not).\n\n\n\n190. What is Object.defineProperty() used for?\n\nDefines or modifies property descriptors (writable, enumerable, configurable).\n\n\n\n191. What are getter and setter methods in JavaScript?\n\nSpecial methods to access or update properties dynamically:\n\n\n\nclass User { get name() {} set name(v) {} }\n\n192. What is the difference between Object.seal() and Object.preventExtensions()?\n\n\n\nseal() prevents adding/removing properties but allows modification.\n\n\n\npreventExtensions() only prevents adding new properties.\n\n\n\n193. What are async functions?\n\nFunctions declared with async that always return a Promise.\n\n\n\n194. What is the difference between microtasks and macrotasks?\n\n\n\nMicrotasks: Promises, MutationObserver (executed before rendering).\n\n\n\nMacrotasks: setTimeout, setInterval, setImmediate.\n\n\n\n195. What is the difference between throttling and debouncing?\n\n\n\nThrottling ensures a function is called at most once per time interval.\n\n\n\nDebouncing delays execution until inactivity for a set period.\n\n\n\n196. What are service workers in JavaScript?\n\nScripts running in the background for caching, offline support, push notifications.\n\n\n\n197. What is the difference between innerHTML, innerText, and textContent?\n\n\n\ninnerHTML: parses HTML.\n\n\n\ninnerText: returns visible text only.\n\n\n\ntextContent: returns all text including hidden.\n\n\n\n198. What is the difference between passive event listeners and regular ones?\n\n\n\nPassive listeners ({ passive: true }) indicate that preventDefault() won\u2019t be called, improving scroll performance.\n\n\n\n199. What is the difference between shallow equality and deep equality?\n\n\n\nShallow equality compares only first-level properties.\n\n\n\nDeep equality recursively compares all nested properties.\n\n\n\n200. What is the difference between tree-shaking and dead code elimination?\n\n\n\nTree-shaking removes unused exports during bundling.\n\n\n\nDead code elimination removes unreachable code after optimizations.\n\n\n\n\u2705 That\u2019s 200 JavaScript Q&A in total (4 sets of 50).\n\n\n\nDo you want me to keep going until we hit 500 JavaScript questions like we did with Python, or do you want to mix these with Node.js-specific questions next?\n\n\n\n\n\nI need 50 more\n\n\n\nGot it \ud83d\udc4d Here\u2019s another 50 JavaScript interview questions and answers for you:\n\n\n\nJavaScript Interview Questions (Set 9: 401\u2013450)\n\nWhat is the difference between undefined and not defined in JavaScript?\n\n\n\nundefined: A variable is declared but not assigned a value.\n\n\n\nnot defined: A variable hasn\u2019t been declared at all.\n\n\n\nWhat does the this keyword refer to in strict mode in a function?\n\n\n\nIn strict mode, this is undefined instead of pointing to the global object.\n\n\n\nWhat is the difference between innerHTML and textContent?\n\n\n\ninnerHTML parses and renders HTML.\n\n\n\ntextContent only returns plain text.\n\n\n\nWhat does the super keyword do in classes?\n\n\n\nIt calls the parent class\u2019s constructor or methods.\n\n\n\nWhat is the Temporal Dead Zone (TDZ)?\n\n\n\nThe time between entering scope and variable initialization where accessing a let or const variable throws a ReferenceError.\n\n\n\nWhat is a higher-order function?\n\n\n\nA function that takes another function as an argument or returns a function.\n\n\n\nHow do you copy an object in JavaScript without reference?\n\n\n\nUsing structuredClone(obj) or JSON.parse(JSON.stringify(obj)).\n\n\n\nWhat is a pure function?\n\n\n\nA function that always returns the same output for the same input and has no side effects.\n\n\n\nWhat are tagged template literals?\n\n\n\nA way to customize how template literals are processed by defining a tag function.\n\n\n\nWhat is a generator function?\n\n\n\nA function defined with function* that can yield multiple values using the yield keyword.\n\n\n\nWhat is the purpose of Symbol in JavaScript?\n\n\n\nTo create unique and immutable identifiers, often used as object property keys.\n\n\n\nWhat is the difference between shallow copy and deep copy?\n\n\n\nShallow copy copies only top-level properties.\n\n\n\nDeep copy recursively copies nested objects.\n\n\n\nWhat is the difference between var a = b = 5; and var a = 5, b = 5;?\n\n\n\nvar a = b = 5; assigns b to global scope (if not declared).\n\n\n\nvar a = 5, b = 5; declares both in local scope.\n\n\n\nWhat is the difference between synchronous and asynchronous code?\n\n\n\nSynchronous executes line by line.\n\n\n\nAsynchronous allows other tasks to run while waiting for completion.\n\n\n\nWhat are WeakMap and WeakSet?\n\n\n\nCollections similar to Map and Set, but keys are weakly referenced and eligible for garbage collection.\n\n\n\nWhy is typeof NaN equal to \"number\"?\n\n\n\nBecause NaN is technically a numeric type, though it means \"Not-a-Number\".\n\n\n\nWhat does the void operator do?\n\n\n\nEvaluates an expression and returns undefined.\n\n\n\nWhat are default parameters in JavaScript functions?\n\n\n\nParameters that take a default value if no argument is passed.\n\n\n\nWhat is short-circuit evaluation in JavaScript?\n\n\n\nUsing || and && operators to return values without evaluating further.\n\n\n\nWhat is the difference between a for...of loop and a for...in loop?\n\n\n\nfor...of: Iterates values of iterables (arrays, strings).\n\n\n\nfor...in: Iterates enumerable property keys of objects.\n\n\n\nWhat is a service worker?\n\n\n\nA script that runs in the background, intercepting network requests for caching and offline functionality.\n\n\n\nWhat is an Immediately Invoked Function Expression (IIFE)?\n\n\n\nA function that runs immediately after being defined.\n\n\n\nWhat is the difference between DOMContentLoaded and load events?\n\n\n\nDOMContentLoaded: Fires when HTML is loaded.\n\n\n\nload: Fires after all resources (images, scripts) are loaded.\n\n\n\nWhat is the difference between splice and slice in arrays?\n\n\n\nslice: Returns a shallow copy.\n\n\n\nsplice: Modifies the original array.\n\n\n\nWhat does the map() method do in arrays?\n\n\n\nCreates a new array by applying a function to each element.\n\n\n\nWhat does the filter() method do in arrays?\n\n\n\nReturns a new array with elements that pass a test function.\n\n\n\nWhat does the reduce() method do in arrays?\n\n\n\nReduces array values into a single result based on a reducer function.\n\n\n\nWhat is the difference between some() and every() in arrays?\n\n\n\nsome(): Returns true if at least one element passes.\n\n\n\nevery(): Returns true if all elements pass.\n\n\n\nWhat is the difference between shallow equality (==) and strict equality (===)?\n\n\n\n==: Performs type coercion.\n\n\n\n===: Checks type and value.\n\n\n\nWhat is the difference between null and undefined in comparisons?\n\n\n\nnull == undefined is true.\n\n\n\nnull === undefined is false.\n\n\n\nWhat are modules in JavaScript?\n\n\n\nFiles that export and import code using export and import.\n\n\n\nWhat are ES6 classes syntactic sugar for?\n\n\n\nJavaScript prototypes.\n\n\n\nWhat is the difference between Object.freeze() and Object.seal()?\n\n\n\nfreeze: Prevents adding, deleting, or modifying properties.\n\n\n\nseal: Prevents adding/deleting but allows modifying.\n\n\n\nWhat does Object.assign() do?\n\n\n\nCopies properties from one or more source objects to a target object.\n\n\n\nWhat is a polyfill?\n\n\n\nCode that adds missing functionality in older browsers.\n\n\n\nWhat are decorators in JavaScript (proposal stage)?\n\n\n\nFunctions that add metadata or modify behavior of classes and methods.\n\n\n\nWhat is an event delegation pattern?\n\n\n\nAttaching one event listener to a parent element to handle events on child elements.\n\n\n\nWhat is the difference between bubbling and capturing in event propagation?\n\n\n\nBubbling: Events propagate upward.\n\n\n\nCapturing: Events propagate downward before target.\n\n\n\nWhat is the difference between throttling and debouncing?\n\n\n\nThrottling: Limits function execution to once per interval.\n\n\n\nDebouncing: Delays execution until after a pause in activity.\n\n\n\nWhat is the difference between async function and normal functions?\n\n\n\nasync functions return promises and allow await.\n\n\n\nWhat is an event loop tick?\n\n\n\nA single cycle of checking and executing tasks in the JavaScript event loop.\n\n\n\nWhat is a Promise.all()?\n\n\n\nExecutes multiple promises in parallel and resolves when all succeed.\n\n\n\nWhat is Promise.race()?\n\n\n\nResolves or rejects as soon as the first promise settles.\n\n\n\nWhat is Promise.allSettled()?\n\n\n\nResolves when all promises settle, regardless of success or failure.\n\n\n\nWhat is Promise.any()?\n\n\n\nResolves when the first promise succeeds.\n\n\n\nWhat are async iterators in JavaScript?\n\n\n\nIterators that work with await in loops.\n\n\n\nWhat is top-level await?\n\n\n\nAllows await at the top level of ES modules.\n\n\n\nWhat is an import alias in JavaScript?\n\n\n\nRenaming imports using import { func as newName } from 'module'.\n\n\n\nWhat is dynamic import in JavaScript?\n\n\n\nImporting modules on demand using import().\n\n\n\nWhat is tree shaking in JavaScript bundlers?\n\n\n\nRemoving unused code during bundling.\n\n\n\n\u2705 That brings us to 450 JavaScript questions so far.\n\n\n\nDo you want me to continue until we hit 500 questions, or should I stop at 450?\n\n\n\n\n\nI need 50 more\n\n\n\nGot it \ud83d\udc4d Here\u2019s another 50 JavaScript questions and answers to continue your prep:\n\n\n\nJavaScript Interview Questions (Batch 10: 451\u2013500)\n\nCore Concepts\n\nWhat is the difference between null and undefined?\n\n\n\nnull is an intentional absence of value.\n\n\n\nundefined means a variable is declared but not assigned.\n\n\n\nWhat is a WeakMap in JavaScript?\n\nA WeakMap is a collection of key-value pairs where keys are objects, and references to keys are weak (garbage-collectable).\n\n\n\nWhat is a WeakSet?\n\nWeakSet stores only objects and holds weak references, allowing garbage collection.\n\n\n\nWhat is the difference between shallow copy and deep copy in JavaScript?\n\n\n\nShallow copy: Copies only references for nested objects.\n\n\n\nDeep copy: Recursively copies all nested structures.\n\n\n\nWhat are truthy and falsy values?\n\nFalsy values: false, 0, \"\", null, undefined, NaN. Everything else is truthy.\n\n\n\nWhat is the with statement in JavaScript? Why is it discouraged?\n\nThe with statement extends the scope chain for an object. It is discouraged because it causes ambiguity and reduces performance.\n\n\n\nWhat is event delegation?\n\nAttaching a single event listener on a parent element to handle events from child elements using event bubbling.\n\n\n\nWhat are higher-order functions?\n\nFunctions that take other functions as arguments or return them.\n\n\n\nExplain the concept of a pure function.\n\nA pure function always returns the same output for the same inputs and has no side effects.\n\n\n\nWhat is memoization in JavaScript?\n\nAn optimization technique where results of expensive function calls are cached.\n\n\n\nFunctions & Closures\n\nWhat are generator functions?\n\nFunctions defined with function* that can yield multiple values and be paused/resumed.\n\n\n\nHow do you create an immediately invoked function expression (IIFE)?\n\n\n\n(function() {\n\n  console.log(\"IIFE executed\");\n\n})();\n\nWhat is the difference between function and function*?\n\nfunction* creates a generator function that returns an iterator.\n\n\n\nHow does JavaScript handle recursion?\n\nThrough the function call stack, until stack overflow occurs if too deep.\n\n\n\nWhat are arrow function limitations?\n\n\n\nNo arguments object\n\n\n\nNo this binding\n\n\n\nCannot be used as constructors\n\n\n\nWhat is a callback function?\n\nA function passed as an argument to another function, invoked later.\n\n\n\nWhat is the difference between callbacks and promises?\n\nCallbacks use functions, Promises provide a structured way of chaining async operations.\n\n\n\nWhat is async/await sugar for?\n\nIt is syntactic sugar for handling Promises in a synchronous-like way.\n\n\n\nWhat is tail call optimization (TCO)?\n\nA technique where recursive calls reuse the current stack frame, avoiding stack overflow. Not widely supported in JS.\n\n\n\nWhat is the difference between synchronous and asynchronous execution?\n\n\n\nSynchronous: Tasks execute one after another.\n\n\n\nAsynchronous: Tasks can run independently, not blocking execution.\n\n\n\nObjects & Prototypes\n\nWhat is a mixin in JavaScript?\n\nA pattern where properties/methods from one object are copied into another.\n\n\n\nWhat is Object.assign used for?\n\nCopies values of enumerable properties from source objects to a target object.\n\n\n\nWhat is the difference between Object.seal and Object.freeze?\n\n\n\nseal: Prevents adding/removing properties, but allows modification.\n\n\n\nfreeze: Prevents adding/removing/modifying properties.\n\n\n\nWhat does Object.preventExtensions do?\n\nPrevents new properties from being added to an object.\n\n\n\nWhat is prototypal inheritance?\n\nObjects can inherit properties and methods from another object via their prototype chain.\n\n\n\nWhat is the difference between in and hasOwnProperty?\n\n\n\nin: Checks if a property exists in the object or prototype.\n\n\n\nhasOwnProperty: Checks only the object itself.\n\n\n\nHow do you clone an object in JavaScript?\n\n\n\nShallow: Object.assign({}, obj) or {...obj}\n\n\n\nDeep: JSON.parse(JSON.stringify(obj)) (with limitations)\n\n\n\nWhat are symbols in JavaScript?\n\nUnique and immutable primitive values used as object property keys.\n\n\n\nHow do you make an object immutable in JavaScript?\n\nUse Object.freeze(obj).\n\n\n\nWhat is duck typing in JavaScript?\n\nDetermining an object\u2019s suitability by checking for certain properties/methods rather than its type.\n\n\n\nDOM & Events\n\nWhat is the difference between innerHTML and textContent?\n\n\n\ninnerHTML: Returns/sets HTML markup.\n\n\n\ntextContent: Returns/sets only text.\n\n\n\nWhat is the difference between getElementById and querySelect\n<truncated 35225 bytes>\n\nNOTE: The output was truncated because it was too long. Use a more targeted query or a smaller range to get the information you need."
    },
    {
        "id": 106,
        "topic": "JavaScript",
        "question": "What is the difference between for...of and for...in loops?",
        "answer": "for...in iterates over enumerable property keys of an object.\n\n\n\nfor...of iterates over values of an iterable (like arrays, strings, maps)."
    },
    {
        "id": 107,
        "topic": "JavaScript",
        "question": "What is the difference between slice() and splice() in JavaScript?",
        "answer": "slice(start, end) returns a shallow copy without modifying the original array.\n\n\n\nsplice(start, deleteCount, ...items) changes the original array by adding/removing elements."
    },
    {
        "id": 108,
        "topic": "JavaScript",
        "question": "What are higher-order functions?",
        "answer": "Functions that take other functions as arguments or return a function. Example: map(), filter(), reduce()."
    },
    {
        "id": 109,
        "topic": "JavaScript",
        "question": "Explain the concept of \"event delegation\".",
        "answer": "Event delegation is attaching a single event listener to a parent element to manage events on its child elements using event bubbling."
    },
    {
        "id": 110,
        "topic": "JavaScript",
        "question": "What is a WeakSet in JavaScript?",
        "answer": "A collection of objects only (no primitives), with weak references, meaning objects can be garbage collected if no references exist."
    },
    {
        "id": 111,
        "topic": "JavaScript",
        "question": "What is a WeakMap in JavaScript?",
        "answer": "Similar to Map, but keys must be objects, and references are weak, allowing garbage collection."
    },
    {
        "id": 112,
        "topic": "JavaScript",
        "question": "What is the difference between == and Object.is()?",
        "answer": "== performs type coercion before comparison.\n\n\n\nObject.is() is like === but treats NaN as equal and +0 and -0 as different."
    },
    {
        "id": 113,
        "topic": "JavaScript",
        "question": "What is the difference between window.onload and DOMContentLoaded?",
        "answer": "window.onload waits for the whole page (including images and styles) to load.\n\n\n\nDOMContentLoaded triggers when the HTML is parsed."
    },
    {
        "id": 114,
        "topic": "JavaScript",
        "question": "What are template literals in JavaScript?",
        "answer": "String literals enclosed in backticks (`) that allow interpolation (${value}) and multi-line strings."
    },
    {
        "id": 115,
        "topic": "JavaScript",
        "question": "What is an IIFE (Immediately Invoked Function Expression)?",
        "answer": "A function that runs immediately after being defined:\n\n\n\n(function() { console.log(\"IIFE\"); })();"
    },
    {
        "id": 116,
        "topic": "JavaScript",
        "question": "Explain the difference between localStorage and sessionStorage.",
        "answer": "localStorage persists data even after closing the browser.\n\n\n\nsessionStorage persists only during the tab session."
    },
    {
        "id": 117,
        "topic": "JavaScript",
        "question": "What is the difference between null and undefined?",
        "answer": "null is an intentional empty value.\n\n\n\nundefined means a variable has been declared but not assigned."
    },
    {
        "id": 118,
        "topic": "JavaScript",
        "question": "What is the difference between Object.freeze() and Object.seal()?",
        "answer": "freeze() prevents adding, deleting, or modifying properties.\n\n\n\nseal() allows modifying existing properties but prevents adding/removing."
    },
    {
        "id": 119,
        "topic": "JavaScript",
        "question": "What are tagged template literals?",
        "answer": "Functions that process template literals:\n\n\n\nfunction tag(strings, ...values) { return values.join(\"-\"); }\n\ntag`Hello ${\"World\"}!`; // \"World\""
    },
    {
        "id": 120,
        "topic": "JavaScript",
        "question": "What is typeof NaN?",
        "answer": "It is \"number\"."
    },
    {
        "id": 121,
        "topic": "JavaScript",
        "question": "What is the difference between function expressions and function declarations?",
        "answer": "Declarations are hoisted and available before execution.\n\n\n\nExpressions are not hoisted."
    },
    {
        "id": 122,
        "topic": "JavaScript",
        "question": "What is event bubbling?",
        "answer": "The process where an event starts from the target element and bubbles up through ancestors."
    },
    {
        "id": 123,
        "topic": "JavaScript",
        "question": "What is event capturing?",
        "answer": "The opposite of bubbling: events are captured from ancestors down to the target."
    },
    {
        "id": 124,
        "topic": "JavaScript",
        "question": "What is the difference between async/await and Promises?",
        "answer": "async/await is syntactic sugar over Promises, making asynchronous code look synchronous.\n\n\n\nPromises use .then() chaining."
    },
    {
        "id": 125,
        "topic": "JavaScript",
        "question": "What is the difference between Array.find() and Array.filter()?",
        "answer": "find() returns the first matching element.\n\n\n\nfilter() returns all matching elements as an array."
    },
    {
        "id": 126,
        "topic": "JavaScript",
        "question": "What is the difference between Object.assign() and spread syntax {...obj}?",
        "answer": "Both copy properties, but spread syntax is more concise and can\u2019t copy property descriptors."
    },
    {
        "id": 127,
        "topic": "JavaScript",
        "question": "What are private fields in JavaScript classes?",
        "answer": "Fields prefixed with # inside classes that cannot be accessed outside.\n\n\n\nclass Person { #name = \"John\"; }"
    },
    {
        "id": 128,
        "topic": "JavaScript",
        "question": "What is the difference between flat() and flatMap() in arrays?",
        "answer": "flat() flattens nested arrays.\n\n\n\nflatMap() maps each element and then flattens the result one level."
    },
    {
        "id": 129,
        "topic": "JavaScript",
        "question": "What is the difference between charAt() and charCodeAt()?",
        "answer": "charAt() returns the character at a given index.\n\n\n\ncharCodeAt() returns the Unicode value."
    },
    {
        "id": 130,
        "topic": "JavaScript",
        "question": "What is the difference between function currying and partial application?",
        "answer": "Currying transforms a function into a series of functions each taking one argument.\n\n\n\nPartial application fixes some arguments while leaving others open."
    },
    {
        "id": 131,
        "topic": "JavaScript",
        "question": "What is the difference between isNaN() and Number.isNaN()?",
        "answer": "isNaN() coerces to number before checking.\n\n\n\nNumber.isNaN() checks only if value is exactly NaN."
    },
    {
        "id": 132,
        "topic": "JavaScript",
        "question": "What is the difference between Object.create() and {}?",
        "answer": "{} creates an object with Object.prototype.\n\n\n\nObject.create(proto) allows custom prototypes."
    },
    {
        "id": 133,
        "topic": "JavaScript",
        "question": "What are JavaScript iterables?",
        "answer": "Objects implementing the Symbol.iterator method, e.g., arrays, strings, maps."
    },
    {
        "id": 134,
        "topic": "JavaScript",
        "question": "What is the difference between Map and plain objects?",
        "answer": "Map can have any value type as keys.\n\n\n\nObjects have only strings/symbols as keys."
    },
    {
        "id": 135,
        "topic": "JavaScript",
        "question": "What is a generator function?",
        "answer": "A function defined with function* that can pause (yield) and resume."
    },
    {
        "id": 136,
        "topic": "JavaScript",
        "question": "What is the difference between next() in generator and async iterators?",
        "answer": "Generators return { value, done }.\n\n\n\nAsync iterators return a Promise resolving to { value, done }."
    },
    {
        "id": 137,
        "topic": "JavaScript",
        "question": "What are async generators?",
        "answer": "Generators that can yield Promises and use for await...of loops."
    },
    {
        "id": 138,
        "topic": "JavaScript",
        "question": "What is the difference between apply() and call()?",
        "answer": "call(thisArg, ...args) passes arguments individually.\n\n\n\napply(thisArg, [args]) passes arguments as an array."
    },
    {
        "id": 139,
        "topic": "JavaScript",
        "question": "What is the difference between bind() and call()?",
        "answer": "call() invokes immediately.\n\n\n\nbind() returns a new function with bound context."
    },
    {
        "id": 140,
        "topic": "JavaScript",
        "question": "What is a Proxy in JavaScript?",
        "answer": "An object that wraps another object and intercepts operations like get, set."
    },
    {
        "id": 141,
        "topic": "JavaScript",
        "question": "What are JavaScript Symbols used for?",
        "answer": "Unique identifiers that avoid property name collisions."
    },
    {
        "id": 142,
        "topic": "JavaScript",
        "question": "What is the difference between Object.keys() and Object.getOwnPropertyNames()?",
        "answer": "Object.keys() returns enumerable keys.\n\n\n\nObject.getOwnPropertyNames() returns all own keys (enumerable or not)."
    },
    {
        "id": 143,
        "topic": "JavaScript",
        "question": "What is Object.defineProperty() used for?",
        "answer": "Defines or modifies property descriptors (writable, enumerable, configurable)."
    },
    {
        "id": 144,
        "topic": "JavaScript",
        "question": "What are getter and setter methods in JavaScript?",
        "answer": "Special methods to access or update properties dynamically:\n\n\n\nclass User { get name() {} set name(v) {} }"
    },
    {
        "id": 145,
        "topic": "JavaScript",
        "question": "What is the difference between Object.seal() and Object.preventExtensions()?",
        "answer": "seal() prevents adding/removing properties but allows modification.\n\n\n\npreventExtensions() only prevents adding new properties."
    },
    {
        "id": 146,
        "topic": "JavaScript",
        "question": "What are async functions?",
        "answer": "Functions declared with async that always return a Promise."
    },
    {
        "id": 147,
        "topic": "JavaScript",
        "question": "What is the difference between microtasks and macrotasks?",
        "answer": "Microtasks: Promises, MutationObserver (executed before rendering).\n\n\n\nMacrotasks: setTimeout, setInterval, setImmediate."
    },
    {
        "id": 148,
        "topic": "JavaScript",
        "question": "What is the difference between throttling and debouncing?",
        "answer": "Throttling ensures a function is called at most once per time interval.\n\n\n\nDebouncing delays execution until inactivity for a set period."
    },
    {
        "id": 149,
        "topic": "JavaScript",
        "question": "What are service workers in JavaScript?",
        "answer": "Scripts running in the background for caching, offline support, push notifications."
    },
    {
        "id": 150,
        "topic": "JavaScript",
        "question": "What is the difference between innerHTML, innerText, and textContent?",
        "answer": "innerHTML: parses HTML.\n\n\n\ninnerText: returns visible text only.\n\n\n\ntextContent: returns all text including hidden."
    },
    {
        "id": 151,
        "topic": "JavaScript",
        "question": "What is the difference between passive event listeners and regular ones?",
        "answer": "Passive listeners ({ passive: true }) indicate that preventDefault() won\u2019t be called, improving scroll performance."
    },
    {
        "id": 152,
        "topic": "JavaScript",
        "question": "What is the difference between shallow equality and deep equality?",
        "answer": "Shallow equality compares only first-level properties.\n\n\n\nDeep equality recursively compares all nested properties."
    },
    {
        "id": 153,
        "topic": "JavaScript",
        "question": "What is the difference between tree-shaking and dead code elimination?",
        "answer": "Tree-shaking removes unused exports during bundling.\n\n\n\nDead code elimination removes unreachable code after optimizations.\n\n\n\n\u2705 That\u2019s 200 JavaScript Q&A in total (4 sets of 50).\n\n\n\nDo you want me to keep going until we hit 500 JavaScript questions like we did with Python, or do you want to mix these with Node.js-specific questions next?\n\n\n\n\n\nI need 50 more\n\n\n\nGot it \ud83d\udc4d Here\u2019s another 50 JavaScript interview questions and answers for you:\n\n\n\nJavaScript Interview Questions (Set 9: 401\u2013450)\n\nWhat is the difference between undefined and not defined in JavaScript?\n\n\n\nundefined: A variable is declared but not assigned a value.\n\n\n\nnot defined: A variable hasn\u2019t been declared at all.\n\n\n\nWhat does the this keyword refer to in strict mode in a function?\n\n\n\nIn strict mode, this is undefined instead of pointing to the global object.\n\n\n\nWhat is the difference between innerHTML and textContent?\n\n\n\ninnerHTML parses and renders HTML.\n\n\n\ntextContent only returns plain text.\n\n\n\nWhat does the super keyword do in classes?\n\n\n\nIt calls the parent class\u2019s constructor or methods.\n\n\n\nWhat is the Temporal Dead Zone (TDZ)?\n\n\n\nThe time between entering scope and variable initialization where accessing a let or const variable throws a ReferenceError.\n\n\n\nWhat is a higher-order function?\n\n\n\nA function that takes another function as an argument or returns a function.\n\n\n\nHow do you copy an object in JavaScript without reference?\n\n\n\nUsing structuredClone(obj) or JSON.parse(JSON.stringify(obj)).\n\n\n\nWhat is a pure function?\n\n\n\nA function that always returns the same output for the same input and has no side effects.\n\n\n\nWhat are tagged template literals?\n\n\n\nA way to customize how template literals are processed by defining a tag function.\n\n\n\nWhat is a generator function?\n\n\n\nA function defined with function* that can yield multiple values using the yield keyword.\n\n\n\nWhat is the purpose of Symbol in JavaScript?\n\n\n\nTo create unique and immutable identifiers, often used as object property keys.\n\n\n\nWhat is the difference between shallow copy and deep copy?\n\n\n\nShallow copy copies only top-level properties.\n\n\n\nDeep copy recursively copies nested objects.\n\n\n\nWhat is the difference between var a = b = 5; and var a = 5, b = 5;?\n\n\n\nvar a = b = 5; assigns b to global scope (if not declared).\n\n\n\nvar a = 5, b = 5; declares both in local scope.\n\n\n\nWhat is the difference between synchronous and asynchronous code?\n\n\n\nSynchronous executes line by line.\n\n\n\nAsynchronous allows other tasks to run while waiting for completion.\n\n\n\nWhat are WeakMap and WeakSet?\n\n\n\nCollections similar to Map and Set, but keys are weakly referenced and eligible for garbage collection.\n\n\n\nWhy is typeof NaN equal to \"number\"?\n\n\n\nBecause NaN is technically a numeric type, though it means \"Not-a-Number\".\n\n\n\nWhat does the void operator do?\n\n\n\nEvaluates an expression and returns undefined.\n\n\n\nWhat are default parameters in JavaScript functions?\n\n\n\nParameters that take a default value if no argument is passed.\n\n\n\nWhat is short-circuit evaluation in JavaScript?\n\n\n\nUsing || and && operators to return values without evaluating further.\n\n\n\nWhat is the difference between a for...of loop and a for...in loop?\n\n\n\nfor...of: Iterates values of iterables (arrays, strings).\n\n\n\nfor...in: Iterates enumerable property keys of objects.\n\n\n\nWhat is a service worker?\n\n\n\nA script that runs in the background, intercepting network requests for caching and offline functionality.\n\n\n\nWhat is an Immediately Invoked Function Expression (IIFE)?\n\n\n\nA function that runs immediately after being defined.\n\n\n\nWhat is the difference between DOMContentLoaded and load events?\n\n\n\nDOMContentLoaded: Fires when HTML is loaded.\n\n\n\nload: Fires after all resources (images, scripts) are loaded.\n\n\n\nWhat is the difference between splice and slice in arrays?\n\n\n\nslice: Returns a shallow copy.\n\n\n\nsplice: Modifies the original array.\n\n\n\nWhat does the map() method do in arrays?\n\n\n\nCreates a new array by applying a function to each element.\n\n\n\nWhat does the filter() method do in arrays?\n\n\n\nReturns a new array with elements that pass a test function.\n\n\n\nWhat does the reduce() method do in arrays?\n\n\n\nReduces array values into a single result based on a reducer function.\n\n\n\nWhat is the difference between some() and every() in arrays?\n\n\n\nsome(): Returns true if at least one element passes.\n\n\n\nevery(): Returns true if all elements pass.\n\n\n\nWhat is the difference between shallow equality (==) and strict equality (===)?\n\n\n\n==: Performs type coercion.\n\n\n\n===: Checks type and value.\n\n\n\nWhat is the difference between null and undefined in comparisons?\n\n\n\nnull == undefined is true.\n\n\n\nnull === undefined is false.\n\n\n\nWhat are modules in JavaScript?\n\n\n\nFiles that export and import code using export and import.\n\n\n\nWhat are ES6 classes syntactic sugar for?\n\n\n\nJavaScript prototypes.\n\n\n\nWhat is the difference between Object.freeze() and Object.seal()?\n\n\n\nfreeze: Prevents adding, deleting, or modifying properties.\n\n\n\nseal: Prevents adding/deleting but allows modifying.\n\n\n\nWhat does Object.assign() do?\n\n\n\nCopies properties from one or more source objects to a target object.\n\n\n\nWhat is a polyfill?\n\n\n\nCode that adds missing functionality in older browsers.\n\n\n\nWhat are decorators in JavaScript (proposal stage)?\n\n\n\nFunctions that add metadata or modify behavior of classes and methods.\n\n\n\nWhat is an event delegation pattern?\n\n\n\nAttaching one event listener to a parent element to handle events on child elements.\n\n\n\nWhat is the difference between bubbling and capturing in event propagation?\n\n\n\nBubbling: Events propagate upward.\n\n\n\nCapturing: Events propagate downward before target.\n\n\n\nWhat is the difference between throttling and debouncing?\n\n\n\nThrottling: Limits function execution to once per interval.\n\n\n\nDebouncing: Delays execution until after a pause in activity.\n\n\n\nWhat is the difference between async function and normal functions?\n\n\n\nasync functions return promises and allow await.\n\n\n\nWhat is an event loop tick?\n\n\n\nA single cycle of checking and executing tasks in the JavaScript event loop.\n\n\n\nWhat is a Promise.all()?\n\n\n\nExecutes multiple promises in parallel and resolves when all succeed.\n\n\n\nWhat is Promise.race()?\n\n\n\nResolves or rejects as soon as the first promise settles.\n\n\n\nWhat is Promise.allSettled()?\n\n\n\nResolves when all promises settle, regardless of success or failure.\n\n\n\nWhat is Promise.any()?\n\n\n\nResolves when the first promise succeeds.\n\n\n\nWhat are async iterators in JavaScript?\n\n\n\nIterators that work with await in loops.\n\n\n\nWhat is top-level await?\n\n\n\nAllows await at the top level of ES modules.\n\n\n\nWhat is an import alias in JavaScript?\n\n\n\nRenaming imports using import { func as newName } from 'module'.\n\n\n\nWhat is dynamic import in JavaScript?\n\n\n\nImporting modules on demand using import().\n\n\n\nWhat is tree shaking in JavaScript bundlers?\n\n\n\nRemoving unused code during bundling.\n\n\n\n\u2705 That brings us to 450 JavaScript questions so far.\n\n\n\nDo you want me to continue until we hit 500 questions, or should I stop at 450?\n\n\n\n\n\nI need 50 more\n\n\n\nGot it \ud83d\udc4d Here\u2019s another 50 JavaScript questions and answers to continue your prep:\n\n\n\nJavaScript Interview Questions (Batch 10: 451\u2013500)\n\nCore Concepts\n\nWhat is the difference between null and undefined?\n\n\n\nnull is an intentional absence of value.\n\n\n\nundefined means a variable is declared but not assigned.\n\n\n\nWhat is a WeakMap in JavaScript?\n\nA WeakMap is a collection of key-value pairs where keys are objects, and references to keys are weak (garbage-collectable).\n\n\n\nWhat is a WeakSet?\n\nWeakSet stores only objects and holds weak references, allowing garbage collection.\n\n\n\nWhat is the difference between shallow copy and deep copy in JavaScript?\n\n\n\nShallow copy: Copies only references for nested objects.\n\n\n\nDeep copy: Recursively copies all nested structures.\n\n\n\nWhat are truthy and falsy values?\n\nFalsy values: false, 0, \"\", null, undefined, NaN. Everything else is truthy.\n\n\n\nWhat is the with statement in JavaScript? Why is it discouraged?\n\nThe with statement extends the scope chain for an object. It is discouraged because it causes ambiguity and reduces performance.\n\n\n\nWhat is event delegation?\n\nAttaching a single event listener on a parent element to handle events from child elements using event bubbling.\n\n\n\nWhat are higher-order functions?\n\nFunctions that take other functions as arguments or return them.\n\n\n\nExplain the concept of a pure function.\n\nA pure function always returns the same output for the same inputs and has no side effects.\n\n\n\nWhat is memoization in JavaScript?\n\nAn optimization technique where results of expensive function calls are cached.\n\n\n\nFunctions & Closures\n\nWhat are generator functions?\n\nFunctions defined with function* that can yield multiple values and be paused/resumed.\n\n\n\nHow do you create an immediately invoked function expression (IIFE)?\n\n\n\n(function() {\n\n  console.log(\"IIFE executed\");\n\n})();\n\nWhat is the difference between function and function*?\n\nfunction* creates a generator function that returns an iterator.\n\n\n\nHow does JavaScript handle recursion?\n\nThrough the function call stack, until stack overflow occurs if too deep.\n\n\n\nWhat are arrow function limitations?\n\n\n\nNo arguments object\n\n\n\nNo this binding\n\n\n\nCannot be used as constructors\n\n\n\nWhat is a callback function?\n\nA function passed as an argument to another function, invoked later.\n\n\n\nWhat is the difference between callbacks and promises?\n\nCallbacks use functions, Promises provide a structured way of chaining async operations.\n\n\n\nWhat is async/await sugar for?\n\nIt is syntactic sugar for handling Promises in a synchronous-like way.\n\n\n\nWhat is tail call optimization (TCO)?\n\nA technique where recursive calls reuse the current stack frame, avoiding stack overflow. Not widely supported in JS.\n\n\n\nWhat is the difference between synchronous and asynchronous execution?\n\n\n\nSynchronous: Tasks execute one after another.\n\n\n\nAsynchronous: Tasks can run independently, not blocking execution.\n\n\n\nObjects & Prototypes\n\nWhat is a mixin in JavaScript?\n\nA pattern where properties/methods from one object are copied into another.\n\n\n\nWhat is Object.assign used for?\n\nCopies values of enumerable properties from source objects to a target object.\n\n\n\nWhat is the difference between Object.seal and Object.freeze?\n\n\n\nseal: Prevents adding/removing properties, but allows modification.\n\n\n\nfreeze: Prevents adding/removing/modifying properties.\n\n\n\nWhat does Object.preventExtensions do?\n\nPrevents new properties from being added to an object.\n\n\n\nWhat is prototypal inheritance?\n\nObjects can inherit properties and methods from another object via their prototype chain.\n\n\n\nWhat is the difference between in and hasOwnProperty?\n\n\n\nin: Checks if a property exists in the object or prototype.\n\n\n\nhasOwnProperty: Checks only the object itself.\n\n\n\nHow do you clone an object in JavaScript?\n\n\n\nShallow: Object.assign({}, obj) or {...obj}\n\n\n\nDeep: JSON.parse(JSON.stringify(obj)) (with limitations)\n\n\n\nWhat are symbols in JavaScript?\n\nUnique and immutable primitive values used as object property keys.\n\n\n\nHow do you make an object immutable in JavaScript?\n\nUse Object.freeze(obj).\n\n\n\nWhat is duck typing in JavaScript?\n\nDetermining an object\u2019s suitability by checking for certain properties/methods rather than its type.\n\n\n\nDOM & Events\n\nWhat is the difference between innerHTML and textContent?\n\n\n\ninnerHTML: Returns/sets HTML markup.\n\n\n\ntextContent: Returns/sets only text.\n\n\n\nWhat is the difference between getElementById and querySelect\n<truncated 35225 bytes>\n\nNOTE: The output was truncated because it was too long. Use a more targeted query or a smaller range to get the information you need."
    },
    {
        "id": 154,
        "topic": "JavaScript",
        "question": "151. What is the difference between for...of and for...in loops?",
        "answer": "for...in iterates over enumerable property keys of an object.\n\nfor...of iterates over values of an iterable (like arrays, strings, maps)."
    },
    {
        "id": 155,
        "topic": "JavaScript",
        "question": "152. What is the difference between slice() and splice() in JavaScript?",
        "answer": "slice(start, end) returns a shallow copy without modifying the original array.\n\nsplice(start, deleteCount, ...items) changes the original array by adding/removing elements."
    },
    {
        "id": 156,
        "topic": "JavaScript",
        "question": "153. What are higher-order functions?",
        "answer": "Functions that take other functions as arguments or return a function. Example: map(), filter(), reduce().\n\n154. Explain the concept of \"event delegation\".\n\nEvent delegation is attaching a single event listener to a parent element to manage events on its child elements using event bubbling."
    },
    {
        "id": 157,
        "topic": "JavaScript",
        "question": "155. What is the difference between synchronous and asynchronous code?",
        "answer": "Synchronous code executes sequentially.\n\nAsynchronous code allows other tasks to run while waiting (e.g., with setTimeout, Promises)."
    },
    {
        "id": 158,
        "topic": "JavaScript",
        "question": "156. What is a WeakSet in JavaScript?",
        "answer": "A collection of objects only (no primitives), with weak references, meaning objects can be garbage collected if no references exist."
    },
    {
        "id": 159,
        "topic": "JavaScript",
        "question": "157. What is a WeakMap in JavaScript?",
        "answer": "Similar to Map, but keys must be objects, and references are weak, allowing garbage collection."
    },
    {
        "id": 160,
        "topic": "JavaScript",
        "question": "158. What is the difference between == and Object.is()?",
        "answer": "== performs type coercion before comparison.\n\nObject.is() is like === but treats NaN as equal and +0 and -0 as different."
    },
    {
        "id": 161,
        "topic": "JavaScript",
        "question": "159. What is the difference between window.onload and DOMContentLoaded?",
        "answer": "window.onload waits for the whole page (including images and styles) to load.\n\nDOMContentLoaded triggers when the HTML is parsed."
    },
    {
        "id": 162,
        "topic": "JavaScript",
        "question": "160. What are template literals in JavaScript?",
        "answer": "String literals enclosed in backticks (`) that allow interpolation (${value}) and multi-line strings."
    },
    {
        "id": 163,
        "topic": "JavaScript",
        "question": "161. What is an IIFE (Immediately Invoked Function Expression)?",
        "answer": "A function that runs immediately after being defined:\n\n(function() { console.log(\"IIFE\"); })();\n\n162. Explain the difference between localStorage and sessionStorage.\n\nlocalStorage persists data even after closing the browser.\n\nsessionStorage persists only during the tab session."
    },
    {
        "id": 164,
        "topic": "JavaScript",
        "question": "163. What is the difference between null and undefined?",
        "answer": "null is an intentional empty value.\n\nundefined means a variable has been declared but not assigned."
    },
    {
        "id": 165,
        "topic": "JavaScript",
        "question": "164. What is the difference between Object.freeze() and Object.seal()?",
        "answer": "freeze() prevents adding, deleting, or modifying properties.\n\nseal() allows modifying existing properties but prevents adding/removing."
    },
    {
        "id": 166,
        "topic": "JavaScript",
        "question": "165. What are tagged template literals?",
        "answer": "Functions that process template literals:\n\nfunction tag(strings, ...values) { return values.join(\"-\"); }\n\ntag`Hello ${\"World\"}!`; // \"World\""
    },
    {
        "id": 167,
        "topic": "JavaScript",
        "question": "166. What is typeof NaN?",
        "answer": "It is \"number\"."
    },
    {
        "id": 168,
        "topic": "JavaScript",
        "question": "167. What is the difference between shallow copy and deep copy?",
        "answer": "Shallow copy copies references for nested objects.\n\nDeep copy creates independent copies of all nested objects."
    },
    {
        "id": 169,
        "topic": "JavaScript",
        "question": "168. What is the difference between function expressions and function declarations?",
        "answer": "Declarations are hoisted and available before execution.\n\nExpressions are not hoisted."
    },
    {
        "id": 170,
        "topic": "JavaScript",
        "question": "169. What is event bubbling?",
        "answer": "The process where an event starts from the target element and bubbles up through ancestors."
    },
    {
        "id": 171,
        "topic": "JavaScript",
        "question": "170. What is event capturing?",
        "answer": "The opposite of bubbling: events are captured from ancestors down to the target."
    },
    {
        "id": 172,
        "topic": "JavaScript",
        "question": "171. What is the difference between async/await and Promises?",
        "answer": "async/await is syntactic sugar over Promises, making asynchronous code look synchronous.\n\nPromises use .then() chaining."
    },
    {
        "id": 173,
        "topic": "JavaScript",
        "question": "172. What is the difference between Array.find() and Array.filter()?",
        "answer": "find() returns the first matching element.\n\nfilter() returns all matching elements as an array."
    },
    {
        "id": 174,
        "topic": "JavaScript",
        "question": "173. What is the difference between Object.assign() and spread syntax {...obj}?",
        "answer": "Both copy properties, but spread syntax is more concise and can\u2019t copy property descriptors."
    },
    {
        "id": 175,
        "topic": "JavaScript",
        "question": "174. What are private fields in JavaScript classes?",
        "answer": "Fields prefixed with # inside classes that cannot be accessed outside.\n\nclass Person { #name = \"John\"; }"
    },
    {
        "id": 176,
        "topic": "JavaScript",
        "question": "175. What is the difference between flat() and flatMap() in arrays?",
        "answer": "flat() flattens nested arrays.\n\nflatMap() maps each element and then flattens the result one level."
    },
    {
        "id": 177,
        "topic": "JavaScript",
        "question": "176. What is the difference between charAt() and charCodeAt()?",
        "answer": "charAt() returns the character at a given index.\n\ncharCodeAt() returns the Unicode value."
    },
    {
        "id": 178,
        "topic": "JavaScript",
        "question": "177. What is the difference between function currying and partial application?",
        "answer": "Currying transforms a function into a series of functions each taking one argument.\n\nPartial application fixes some arguments while leaving others open."
    },
    {
        "id": 179,
        "topic": "JavaScript",
        "question": "178. What is the difference between isNaN() and Number.isNaN()?",
        "answer": "isNaN() coerces to number before checking.\n\nNumber.isNaN() checks only if value is exactly NaN."
    },
    {
        "id": 180,
        "topic": "JavaScript",
        "question": "179. What is the difference between Object.create() and {}?",
        "answer": "{} creates an object with Object.prototype.\n\nObject.create(proto) allows custom prototypes."
    },
    {
        "id": 181,
        "topic": "JavaScript",
        "question": "180. What are JavaScript iterables?",
        "answer": "Objects implementing the Symbol.iterator method, e.g., arrays, strings, maps."
    },
    {
        "id": 182,
        "topic": "JavaScript",
        "question": "181. What is the difference between Map and plain objects?",
        "answer": "Map can have any value type as keys.\n\nObjects have only strings/symbols as keys."
    },
    {
        "id": 183,
        "topic": "JavaScript",
        "question": "182. What is a generator function?",
        "answer": "A function defined with function* that can pause (yield) and resume."
    },
    {
        "id": 184,
        "topic": "JavaScript",
        "question": "183. What is the difference between next() in generator and async iterators?",
        "answer": "Generators return { value, done }.\n\nAsync iterators return a Promise resolving to { value, done }."
    },
    {
        "id": 185,
        "topic": "JavaScript",
        "question": "184. What are async generators?",
        "answer": "Generators that can yield Promises and use for await...of loops."
    },
    {
        "id": 186,
        "topic": "JavaScript",
        "question": "185. What is the difference between apply() and call()?",
        "answer": "call(thisArg, ...args) passes arguments individually.\n\napply(thisArg, [args]) passes arguments as an array."
    },
    {
        "id": 187,
        "topic": "JavaScript",
        "question": "186. What is the difference between bind() and call()?",
        "answer": "call() invokes immediately.\n\nbind() returns a new function with bound context."
    },
    {
        "id": 188,
        "topic": "JavaScript",
        "question": "187. What is a Proxy in JavaScript?",
        "answer": "An object that wraps another object and intercepts operations like get, set."
    },
    {
        "id": 189,
        "topic": "JavaScript",
        "question": "188. What are JavaScript Symbols used for?",
        "answer": "Unique identifiers that avoid property name collisions."
    },
    {
        "id": 190,
        "topic": "JavaScript",
        "question": "189. What is the difference between Object.keys() and Object.getOwnPropertyNames()?",
        "answer": "Object.keys() returns enumerable keys.\n\nObject.getOwnPropertyNames() returns all own keys (enumerable or not)."
    },
    {
        "id": 191,
        "topic": "JavaScript",
        "question": "190. What is Object.defineProperty() used for?",
        "answer": "Defines or modifies property descriptors (writable, enumerable, configurable)."
    },
    {
        "id": 192,
        "topic": "JavaScript",
        "question": "191. What are getter and setter methods in JavaScript?",
        "answer": "Special methods to access or update properties dynamically:\n\nclass User { get name() {} set name(v) {} }"
    },
    {
        "id": 193,
        "topic": "JavaScript",
        "question": "192. What is the difference between Object.seal() and Object.preventExtensions()?",
        "answer": "seal() prevents adding/removing properties but allows modification.\n\npreventExtensions() only prevents adding new properties."
    },
    {
        "id": 194,
        "topic": "JavaScript",
        "question": "193. What are async functions?",
        "answer": "Functions declared with async that always return a Promise."
    },
    {
        "id": 195,
        "topic": "JavaScript",
        "question": "194. What is the difference between microtasks and macrotasks?",
        "answer": "Microtasks: Promises, MutationObserver (executed before rendering).\n\nMacrotasks: setTimeout, setInterval, setImmediate."
    },
    {
        "id": 196,
        "topic": "JavaScript",
        "question": "195. What is the difference between throttling and debouncing?",
        "answer": "Throttling ensures a function is called at most once per time interval.\n\nDebouncing delays execution until inactivity for a set period."
    },
    {
        "id": 197,
        "topic": "JavaScript",
        "question": "196. What are service workers in JavaScript?",
        "answer": "Scripts running in the background for caching, offline support, push notifications."
    },
    {
        "id": 198,
        "topic": "JavaScript",
        "question": "197. What is the difference between innerHTML, innerText, and textContent?",
        "answer": "innerHTML: parses HTML.\n\ninnerText: returns visible text only.\n\ntextContent: returns all text including hidden."
    },
    {
        "id": 199,
        "topic": "JavaScript",
        "question": "198. What is the difference between passive event listeners and regular ones?",
        "answer": "Passive listeners ({ passive: true }) indicate that preventDefault() won\u2019t be called, improving scroll performance."
    },
    {
        "id": 200,
        "topic": "JavaScript",
        "question": "199. What is the difference between shallow equality and deep equality?",
        "answer": "Shallow equality compares only first-level properties.\n\nDeep equality recursively compares all nested properties."
    },
    {
        "id": 201,
        "topic": "JavaScript",
        "question": "200. What is the difference between tree-shaking and dead code elimination?",
        "answer": "Tree-shaking removes unused exports during bundling.\n\nDead code elimination removes unreachable code after optimizations.\n\n\u2705 That\u2019s 200 JavaScript Q&A in total (4 sets of 50).\n\nDo you want me to keep going until we hit 500 JavaScript questions like we did with Python, or do you want to mix these with Node.js-specific questions next?\n\nI need 50 more\n\nGot it \ud83d\udc4d Here\u2019s another 50 JavaScript interview questions and answers for you:"
    },
    {
        "id": 202,
        "topic": "JavaScript",
        "question": "What is the difference between undefined and not defined in JavaScript?",
        "answer": "undefined: A variable is declared but not assigned a value.\n\nnot defined: A variable hasn\u2019t been declared at all."
    },
    {
        "id": 203,
        "topic": "JavaScript",
        "question": "What does the this keyword refer to in strict mode in a function?",
        "answer": "In strict mode, this is undefined instead of pointing to the global object."
    },
    {
        "id": 204,
        "topic": "JavaScript",
        "question": "What is the difference between innerHTML and textContent?",
        "answer": "innerHTML parses and renders HTML.\n\ntextContent only returns plain text."
    },
    {
        "id": 205,
        "topic": "JavaScript",
        "question": "What does the super keyword do in classes?",
        "answer": "It calls the parent class\u2019s constructor or methods."
    },
    {
        "id": 206,
        "topic": "JavaScript",
        "question": "What is the Temporal Dead Zone (TDZ)?",
        "answer": "The time between entering scope and variable initialization where accessing a let or const variable throws a ReferenceError."
    },
    {
        "id": 207,
        "topic": "JavaScript",
        "question": "What is a higher-order function?",
        "answer": "A function that takes another function as an argument or returns a function."
    },
    {
        "id": 208,
        "topic": "JavaScript",
        "question": "How do you copy an object in JavaScript without reference?",
        "answer": "Using structuredClone(obj) or JSON.parse(JSON.stringify(obj))."
    },
    {
        "id": 209,
        "topic": "JavaScript",
        "question": "What is a pure function?",
        "answer": "A function that always returns the same output for the same input and has no side effects."
    },
    {
        "id": 210,
        "topic": "JavaScript",
        "question": "What is the purpose of Symbol in JavaScript?",
        "answer": "To create unique and immutable identifiers, often used as object property keys."
    },
    {
        "id": 211,
        "topic": "JavaScript",
        "question": "What is the difference between var a = b = 5; and var a = 5, b = 5;?",
        "answer": "var a = b = 5; assigns b to global scope (if not declared).\n\nvar a = 5, b = 5; declares both in local scope."
    },
    {
        "id": 212,
        "topic": "JavaScript",
        "question": "What are WeakMap and WeakSet?",
        "answer": "Collections similar to Map and Set, but keys are weakly referenced and eligible for garbage collection."
    },
    {
        "id": 213,
        "topic": "JavaScript",
        "question": "Why is typeof NaN equal to \"number\"?",
        "answer": "Because NaN is technically a numeric type, though it means \"Not-a-Number\"."
    },
    {
        "id": 214,
        "topic": "JavaScript",
        "question": "What does the void operator do?",
        "answer": "Evaluates an expression and returns undefined."
    },
    {
        "id": 215,
        "topic": "JavaScript",
        "question": "What are default parameters in JavaScript functions?",
        "answer": "Parameters that take a default value if no argument is passed."
    },
    {
        "id": 216,
        "topic": "JavaScript",
        "question": "What is short-circuit evaluation in JavaScript?",
        "answer": "Using || and && operators to return values without evaluating further."
    },
    {
        "id": 217,
        "topic": "JavaScript",
        "question": "What is the difference between a for...of loop and a for...in loop?",
        "answer": "for...of: Iterates values of iterables (arrays, strings).\n\nfor...in: Iterates enumerable property keys of objects."
    },
    {
        "id": 218,
        "topic": "JavaScript",
        "question": "What is a service worker?",
        "answer": "A script that runs in the background, intercepting network requests for caching and offline functionality."
    },
    {
        "id": 219,
        "topic": "JavaScript",
        "question": "What is an Immediately Invoked Function Expression (IIFE)?",
        "answer": "A function that runs immediately after being defined."
    },
    {
        "id": 220,
        "topic": "JavaScript",
        "question": "What is the difference between DOMContentLoaded and load events?",
        "answer": "DOMContentLoaded: Fires when HTML is loaded.\n\nload: Fires after all resources (images, scripts) are loaded."
    },
    {
        "id": 221,
        "topic": "JavaScript",
        "question": "What is the difference between splice and slice in arrays?",
        "answer": "slice: Returns a shallow copy.\n\nsplice: Modifies the original array."
    },
    {
        "id": 222,
        "topic": "JavaScript",
        "question": "What does the map() method do in arrays?",
        "answer": "Creates a new array by applying a function to each element."
    },
    {
        "id": 223,
        "topic": "JavaScript",
        "question": "What does the filter() method do in arrays?",
        "answer": "Returns a new array with elements that pass a test function."
    },
    {
        "id": 224,
        "topic": "JavaScript",
        "question": "What does the reduce() method do in arrays?",
        "answer": "Reduces array values into a single result based on a reducer function."
    },
    {
        "id": 225,
        "topic": "JavaScript",
        "question": "What is the difference between some() and every() in arrays?",
        "answer": "some(): Returns true if at least one element passes.\n\nevery(): Returns true if all elements pass."
    },
    {
        "id": 226,
        "topic": "JavaScript",
        "question": "What is the difference between shallow equality (==) and strict equality (===)?",
        "answer": "==: Performs type coercion.\n\n===: Checks type and value."
    },
    {
        "id": 227,
        "topic": "JavaScript",
        "question": "What is the difference between null and undefined in comparisons?",
        "answer": "null == undefined is true.\n\nnull === undefined is false."
    },
    {
        "id": 228,
        "topic": "JavaScript",
        "question": "What are modules in JavaScript?",
        "answer": "Files that export and import code using export and import."
    },
    {
        "id": 229,
        "topic": "JavaScript",
        "question": "What are ES6 classes syntactic sugar for?",
        "answer": "JavaScript prototypes."
    },
    {
        "id": 230,
        "topic": "JavaScript",
        "question": "What does Object.assign() do?",
        "answer": "Copies properties from one or more source objects to a target object."
    },
    {
        "id": 231,
        "topic": "JavaScript",
        "question": "What is a polyfill?",
        "answer": "Code that adds missing functionality in older browsers."
    },
    {
        "id": 232,
        "topic": "JavaScript",
        "question": "What are decorators in JavaScript (proposal stage)?",
        "answer": "Functions that add metadata or modify behavior of classes and methods."
    },
    {
        "id": 233,
        "topic": "JavaScript",
        "question": "What is an event delegation pattern?",
        "answer": "Attaching one event listener to a parent element to handle events on child elements."
    },
    {
        "id": 234,
        "topic": "JavaScript",
        "question": "What is the difference between bubbling and capturing in event propagation?",
        "answer": "Bubbling: Events propagate upward.\n\nCapturing: Events propagate downward before target."
    },
    {
        "id": 235,
        "topic": "JavaScript",
        "question": "What is the difference between async function and normal functions?",
        "answer": "async functions return promises and allow await."
    },
    {
        "id": 236,
        "topic": "JavaScript",
        "question": "What is an event loop tick?",
        "answer": "A single cycle of checking and executing tasks in the JavaScript event loop."
    },
    {
        "id": 237,
        "topic": "JavaScript",
        "question": "What is a Promise.all()?",
        "answer": "Executes multiple promises in parallel and resolves when all succeed."
    },
    {
        "id": 238,
        "topic": "JavaScript",
        "question": "What is Promise.race()?",
        "answer": "Resolves or rejects as soon as the first promise settles."
    },
    {
        "id": 239,
        "topic": "JavaScript",
        "question": "What is Promise.allSettled()?",
        "answer": "Resolves when all promises settle, regardless of success or failure."
    },
    {
        "id": 240,
        "topic": "JavaScript",
        "question": "What is Promise.any()?",
        "answer": "Resolves when the first promise succeeds."
    },
    {
        "id": 241,
        "topic": "JavaScript",
        "question": "What are async iterators in JavaScript?",
        "answer": "Iterators that work with await in loops."
    },
    {
        "id": 242,
        "topic": "JavaScript",
        "question": "What is top-level await?",
        "answer": "Allows await at the top level of ES modules."
    },
    {
        "id": 243,
        "topic": "JavaScript",
        "question": "What is an import alias in JavaScript?",
        "answer": "Renaming imports using import { func as newName } from 'module'."
    },
    {
        "id": 244,
        "topic": "JavaScript",
        "question": "What is dynamic import in JavaScript?",
        "answer": "Importing modules on demand using import()."
    },
    {
        "id": 245,
        "topic": "JavaScript",
        "question": "What is tree shaking in JavaScript bundlers?",
        "answer": "Removing unused code during bundling.\n\n\u2705 That brings us to 450 JavaScript questions so far."
    },
    {
        "id": 246,
        "topic": "JavaScript",
        "question": "Do you want me to continue until we hit 500 questions, or should I stop at 450?",
        "answer": "I need 50 more\n\nGot it \ud83d\udc4d Here\u2019s another 50 JavaScript questions and answers to continue your prep:"
    },
    {
        "id": 247,
        "topic": "JavaScript",
        "question": "What is a WeakSet?",
        "answer": "WeakSet stores only objects and holds weak references, allowing garbage collection."
    },
    {
        "id": 248,
        "topic": "JavaScript",
        "question": "What is the difference between shallow copy and deep copy in JavaScript?",
        "answer": "Shallow copy: Copies only references for nested objects.\n\nDeep copy: Recursively copies all nested structures."
    },
    {
        "id": 249,
        "topic": "JavaScript",
        "question": "What is the with statement in JavaScript? Why is it discouraged?",
        "answer": "The with statement extends the scope chain for an object. It is discouraged because it causes ambiguity and reduces performance."
    },
    {
        "id": 250,
        "topic": "JavaScript",
        "question": "What is memoization in JavaScript?",
        "answer": "An optimization technique where results of expensive function calls are cached.\n\nFunctions & Closures"
    },
    {
        "id": 251,
        "topic": "JavaScript",
        "question": "What are generator functions?",
        "answer": "Functions defined with function* that can yield multiple values and be paused/resumed."
    },
    {
        "id": 252,
        "topic": "JavaScript",
        "question": "How do you create an immediately invoked function expression (IIFE)?",
        "answer": "(function() {\n\nconsole.log(\"IIFE executed\");\n\n})();"
    },
    {
        "id": 253,
        "topic": "JavaScript",
        "question": "What is the difference between function and function*?",
        "answer": "function* creates a generator function that returns an iterator."
    },
    {
        "id": 254,
        "topic": "JavaScript",
        "question": "How does JavaScript handle recursion?",
        "answer": "Through the function call stack, until stack overflow occurs if too deep."
    },
    {
        "id": 255,
        "topic": "JavaScript",
        "question": "What are arrow function limitations?",
        "answer": "No arguments object\n\nNo this binding\n\nCannot be used as constructors"
    },
    {
        "id": 256,
        "topic": "JavaScript",
        "question": "What is the difference between callbacks and promises?",
        "answer": "Callbacks use functions, Promises provide a structured way of chaining async operations."
    },
    {
        "id": 257,
        "topic": "JavaScript",
        "question": "What is async/await sugar for?",
        "answer": "It is syntactic sugar for handling Promises in a synchronous-like way."
    },
    {
        "id": 258,
        "topic": "JavaScript",
        "question": "What is tail call optimization (TCO)?",
        "answer": "A technique where recursive calls reuse the current stack frame, avoiding stack overflow. Not widely supported in JS."
    },
    {
        "id": 259,
        "topic": "JavaScript",
        "question": "What is the difference between synchronous and asynchronous execution?",
        "answer": "Synchronous: Tasks execute one after another.\n\nAsynchronous: Tasks can run independently, not blocking execution.\n\nObjects & Prototypes"
    },
    {
        "id": 260,
        "topic": "JavaScript",
        "question": "What is a mixin in JavaScript?",
        "answer": "A pattern where properties/methods from one object are copied into another."
    },
    {
        "id": 261,
        "topic": "JavaScript",
        "question": "What is Object.assign used for?",
        "answer": "Copies values of enumerable properties from source objects to a target object."
    },
    {
        "id": 262,
        "topic": "JavaScript",
        "question": "What is the difference between Object.seal and Object.freeze?",
        "answer": "seal: Prevents adding/removing properties, but allows modification.\n\nfreeze: Prevents adding/removing/modifying properties."
    },
    {
        "id": 263,
        "topic": "JavaScript",
        "question": "What does Object.preventExtensions do?",
        "answer": "Prevents new properties from being added to an object."
    },
    {
        "id": 264,
        "topic": "JavaScript",
        "question": "What is the difference between in and hasOwnProperty?",
        "answer": "in: Checks if a property exists in the object or prototype.\n\nhasOwnProperty: Checks only the object itself."
    },
    {
        "id": 265,
        "topic": "JavaScript",
        "question": "How do you clone an object in JavaScript?",
        "answer": "Shallow: Object.assign({}, obj) or {...obj}\n\nDeep: JSON.parse(JSON.stringify(obj)) (with limitations)"
    },
    {
        "id": 266,
        "topic": "JavaScript",
        "question": "What are symbols in JavaScript?",
        "answer": "Unique and immutable primitive values used as object property keys."
    },
    {
        "id": 267,
        "topic": "JavaScript",
        "question": "How do you make an object immutable in JavaScript?",
        "answer": "Use Object.freeze(obj)."
    },
    {
        "id": 268,
        "topic": "JavaScript",
        "question": "What is duck typing in JavaScript?",
        "answer": "Determining an object\u2019s suitability by checking for certain properties/methods rather than its type.\n\nDOM & Events"
    },
    {
        "id": 269,
        "topic": "Python / Backend",
        "question": "What is authentication?",
        "answer": "It is the process of verifying a user's identity using credentials like username/password,\ntokens, or biometrics."
    },
    {
        "id": 270,
        "topic": "Python / Backend",
        "question": "What is authorization?",
        "answer": "It determines what an authenticated user is allowed to do within a system."
    },
    {
        "id": 271,
        "topic": "Python / Backend",
        "question": "What is OAuth 2.0?",
        "answer": "An open standard for token-based authorization that allows third-party applications to\naccess a user's resources without exposing credentials."
    },
    {
        "id": 272,
        "topic": "Python / Backend",
        "question": "What is OpenID Connect (OIDC)?",
        "answer": "A simple identity layer on top of OAuth 2.0 that allows clients to verify user identity."
    },
    {
        "id": 273,
        "topic": "Python / Backend",
        "question": "What is JWT?",
        "answer": "JSON Web Token \u2014 a compact, URL-safe token used to represent claims for\nauthentication and authorization."
    },
    {
        "id": 274,
        "topic": "Python / Backend",
        "question": "What are the parts of a JWT?",
        "answer": "Header, Payload, Signature."
    },
    {
        "id": 275,
        "topic": "Python / Backend",
        "question": "How do you secure a JWT?",
        "answer": "Use HTTPS, set short expiration, store securely (e.g., HttpOnly cookies), validate\nsignature and claims."
    },
    {
        "id": 276,
        "topic": "Python / Backend",
        "question": "What is CSRF?",
        "answer": "Cross-Site Request Forgery \u2014 an attack where a user is tricked into executing\nunwanted actions on a site where they\u2019re authenticated."
    },
    {
        "id": 277,
        "topic": "Python / Backend",
        "question": "How to prevent CSRF?",
        "answer": "Use CSRF tokens, SameSite cookies, and validate origin headers."
    },
    {
        "id": 278,
        "topic": "Python / Backend",
        "question": "What is XSS?",
        "answer": "Cross-Site Scripting \u2014 injecting malicious scripts into webpages viewed by others."
    },
    {
        "id": 279,
        "topic": "Python / Backend",
        "question": "How to prevent XSS?",
        "answer": "Sanitize input, use proper output encoding, implement Content Security Policy (CSP)."
    },
    {
        "id": 280,
        "topic": "Python / Backend",
        "question": "What is SQL Injection?",
        "answer": "An attack where malicious SQL is inserted into an input field to access or manipulate\nthe database."
    },
    {
        "id": 281,
        "topic": "Python / Backend",
        "question": "How to prevent SQL Injection?",
        "answer": "Use parameterized queries or prepared statements, never concatenate raw input into\nSQL."
    },
    {
        "id": 282,
        "topic": "Python / Backend",
        "question": "What is HTTPS?",
        "answer": "HTTP over TLS/SSL \u2014 encrypts data in transit between the client and server."
    },
    {
        "id": 283,
        "topic": "Python / Backend",
        "question": "What is a TLS certificate?",
        "answer": "A digital certificate that verifies a server's identity and enables encrypted\ncommunication."
    },
    {
        "id": 284,
        "topic": "Python / Backend",
        "question": "What is password hashing?",
        "answer": "The process of converting a password into an unreadable string using a cryptographic\nhash function (e.g., bcrypt)."
    },
    {
        "id": 285,
        "topic": "Python / Backend",
        "question": "What is the difference between hashing and encryption?",
        "answer": "Hashing is one-way and irreversible; encryption is two-way and reversible with a key."
    },
    {
        "id": 286,
        "topic": "Python / Backend",
        "question": "What is salting in password hashing?",
        "answer": "Adding a unique random string to each password before hashing to prevent dictionary\nattacks."
    },
    {
        "id": 287,
        "topic": "Python / Backend",
        "question": "What is 2FA/MFA?",
        "answer": "Two-Factor / Multi-Factor Authentication \u2014 requiring two or more verification factors to\naccess a system."
    },
    {
        "id": 288,
        "topic": "Python / Backend",
        "question": "What is DevOps?",
        "answer": "A set of practices that combine software development and IT operations to shorten the\ndevelopment lifecycle."
    },
    {
        "id": 289,
        "topic": "Python / Backend",
        "question": "What is CI/CD?",
        "answer": "Continuous Integration and Continuous Deployment \u2014 automating code integration,\ntesting, and delivery to production."
    },
    {
        "id": 290,
        "topic": "Python / Backend",
        "question": "What tools are used in CI/CD?",
        "answer": "Jenkins, GitHub Actions, GitLab CI, CircleCI, Travis CI."
    },
    {
        "id": 291,
        "topic": "Python / Backend",
        "question": "What is Infrastructure as Code (IaC)?",
        "answer": "Managing and provisioning infrastructure using code, typically with tools like Terraform\nor AWS CloudFormation."
    },
    {
        "id": 292,
        "topic": "Python / Backend",
        "question": "What is containerization?",
        "answer": "Packaging an application and its dependencies into a container (e.g., using Docker) to\nrun reliably in any environment."
    },
    {
        "id": 293,
        "topic": "Python / Backend",
        "question": "What is Docker?",
        "answer": "A tool to create, deploy, and run containers, which are lightweight and portable\nexecution environments."
    },
    {
        "id": 294,
        "topic": "Python / Backend",
        "question": "What is Kubernetes?",
        "answer": "An open-source platform for automating deployment, scaling, and managing\ncontainerized applications."
    },
    {
        "id": 295,
        "topic": "Python / Backend",
        "question": "What are Kubernetes pods?",
        "answer": "The smallest deployable units in Kubernetes, which can contain one or more\ncontainers."
    },
    {
        "id": 296,
        "topic": "Python / Backend",
        "question": "What is a service in Kubernetes?",
        "answer": "An abstraction that defines a logical set of pods and a policy to access them."
    },
    {
        "id": 297,
        "topic": "Python / Backend",
        "question": "What are secrets in Kubernetes?",
        "answer": "Kubernetes objects used to store sensitive information like API keys, tokens, or\npasswords."
    },
    {
        "id": 298,
        "topic": "Python / Backend",
        "question": "What is blue-green deployment?",
        "answer": "A deployment strategy that reduces downtime by switching traffic between two identical\nenvironments."
    },
    {
        "id": 299,
        "topic": "Python / Backend",
        "question": "What is normalization in databases?",
        "answer": "The process of organizing data to reduce redundancy and improve data integrity."
    },
    {
        "id": 300,
        "topic": "Python / Backend",
        "question": "What are the normal forms?",
        "answer": "1NF (no repeating groups), 2NF (no partial dependency), 3NF (no transitive\ndependency), BCNF (more strict than 3NF)."
    },
    {
        "id": 301,
        "topic": "Python / Backend",
        "question": "What is denormalization?",
        "answer": "The process of combining tables to improve read performance, often at the cost of data\nredundancy."
    },
    {
        "id": 302,
        "topic": "Python / Backend",
        "question": "What is an index in a database?",
        "answer": "A data structure that improves the speed of data retrieval operations on a table at the\ncost of additional writes and storage."
    },
    {
        "id": 303,
        "topic": "Python / Backend",
        "question": "What types of indexes exist?",
        "answer": "B-Tree, Hash, Full-text, Spatial, Composite (multi-column), and Unique indexes."
    },
    {
        "id": 304,
        "topic": "Python / Backend",
        "question": "What is a primary key?",
        "answer": "A unique identifier for a record in a table; cannot be null and must be unique."
    },
    {
        "id": 305,
        "topic": "Python / Backend",
        "question": "What is a foreign key?",
        "answer": "A field in one table that uniquely identifies a row in another table, creating a relationship\nbetween the tables."
    },
    {
        "id": 306,
        "topic": "Python / Backend",
        "question": "What is a transaction?",
        "answer": "A sequence of database operations that are treated as a single unit of work, which is\neither fully completed or rolled back."
    },
    {
        "id": 307,
        "topic": "Python / Backend",
        "question": "What are the ACID properties?",
        "answer": "Atomicity, Consistency, Isolation, Durability \u2014 ensuring reliable transactions."
    },
    {
        "id": 308,
        "topic": "Python / Backend",
        "question": "What is a deadlock in databases?",
        "answer": "A situation where two or more transactions are waiting for each other to release locks,\npreventing completion."
    },
    {
        "id": 309,
        "topic": "Python / Backend",
        "question": "How do you prevent deadlocks?",
        "answer": "Acquire locks in a consistent order, use short transactions, and implement timeouts or\ndeadlock detection."
    },
    {
        "id": 310,
        "topic": "Python / Backend",
        "question": "What is sharding?",
        "answer": "Partitioning data across multiple machines to improve scalability."
    },
    {
        "id": 311,
        "topic": "Python / Backend",
        "question": "What is replication in databases?",
        "answer": "Copying data from one database server to another for redundancy or performance."
    },
    {
        "id": 312,
        "topic": "Python / Backend",
        "question": "What is a read replica?",
        "answer": "A copy of the database that can only be used for read operations to reduce load on the\nprimary DB."
    },
    {
        "id": 313,
        "topic": "Python / Backend",
        "question": "What is eventual consistency?",
        "answer": "A consistency model where data updates propagate over time, and eventually all nodes\nconverge to the same value."
    },
    {
        "id": 314,
        "topic": "Python / Backend",
        "question": "What is a data warehouse?",
        "answer": "A centralized repository optimized for analytical queries and reporting, usually involving\nlarge volumes of data."
    },
    {
        "id": 315,
        "topic": "Python / Backend",
        "question": "What is a star schema?",
        "answer": "A database schema design with a central fact table connected to dimension tables \u2014\ncommon in OLAP systems."
    },
    {
        "id": 316,
        "topic": "Python / Backend",
        "question": "What\u2019s the difference between OLAP and OLTP?",
        "answer": "OLAP (Online Analytical Processing) is for complex queries and analytics; OLTP\n(Online Transaction Processing) is for fast, real-time transactions."
    },
    {
        "id": 317,
        "topic": "Python / Backend",
        "question": "What is ETL?",
        "answer": "Extract, Transform, Load \u2014 the process of moving data from source systems into a data\nwarehouse."
    },
    {
        "id": 318,
        "topic": "Python / Backend",
        "question": "What is ELT?",
        "answer": "Extract, Load, Transform \u2014 common in modern cloud-based data pipelines where\ntransformation happens after loading."
    },
    {
        "id": 319,
        "topic": "Python / Backend",
        "question": "What are some popular ETL tools?",
        "answer": "Apache Airflow, Talend, dbt, AWS Glue, Fivetran."
    },
    {
        "id": 320,
        "topic": "Python / Backend",
        "question": "What is data modeling?",
        "answer": "The process of designing how data is stored, structured, and related in a system."
    },
    {
        "id": 321,
        "topic": "Python / Backend",
        "question": "What is a surrogate key?",
        "answer": "A system-generated unique identifier used in place of a natural key."
    },
    {
        "id": 322,
        "topic": "Python / Backend",
        "question": "What is a materialized view?",
        "answer": "A database object that stores the result of a query physically and updates periodically."
    },
    {
        "id": 323,
        "topic": "Python / Backend",
        "question": "What is data lineage?",
        "answer": "The path data follows from its origin to its final destination, helping in debugging and\ncompliance."
    },
    {
        "id": 324,
        "topic": "Python / Backend",
        "question": "What is a fact table?",
        "answer": "A central table in a star schema that contains measurable, quantitative data."
    },
    {
        "id": 325,
        "topic": "Python / Backend",
        "question": "What is a dimension table?",
        "answer": "A table that contains descriptive attributes related to the facts (e.g., date, customer,\nproduct)."
    },
    {
        "id": 326,
        "topic": "Python / Backend",
        "question": "What are common database performance issues?",
        "answer": "Slow queries, missing indexes, locks/contention, large joins, and suboptimal schema\ndesign."
    },
    {
        "id": 327,
        "topic": "Python / Backend",
        "question": "What is query optimization?",
        "answer": "Improving SQL queries or schema to execute faster and use fewer resources."
    },
    {
        "id": 328,
        "topic": "Python / Backend",
        "question": "What is an execution plan?",
        "answer": "A breakdown of how the database will execute a query, used to identify performance\nbottlenecks."
    },
    {
        "id": 329,
        "topic": "Python / Backend",
        "question": "What is PEP8 in Python?",
        "answer": "It's the Python style guide that defines best practices for writing clean and readable\ncode."
    },
    {
        "id": 330,
        "topic": "Python / Backend",
        "question": "What are Python decorators?",
        "answer": "Functions that wrap other functions to extend their behavior without modifying them."
    },
    {
        "id": 331,
        "topic": "Python / Backend",
        "question": "What is a Python generator?",
        "answer": "A function that yields values one at a time using `yield`, useful for memory-efficient\niteration."
    },
    {
        "id": 332,
        "topic": "Python / Backend",
        "question": "What are Python context managers used for?",
        "answer": "Managing resources like files or network connections using `with` statements."
    },
    {
        "id": 333,
        "topic": "Python / Backend",
        "question": "What is the GIL in Python?",
        "answer": "The Global Interpreter Lock \u2014 it allows only one thread to execute Python bytecode at a\ntime, limiting multithreading."
    },
    {
        "id": 334,
        "topic": "Python / Backend",
        "question": "How does Python handle concurrency?",
        "answer": "Via threading (I/O-bound), multiprocessing (CPU-bound), or asyncio (asynchronous I/O)."
    },
    {
        "id": 335,
        "topic": "Python / Backend",
        "question": "What is FastAPI?",
        "answer": "A modern Python web framework for building APIs with automatic docs and async\nsupport."
    },
    {
        "id": 336,
        "topic": "Python / Backend",
        "question": "What are FastAPI\u2019s key features?",
        "answer": "Automatic Swagger docs, type hints, async support, and Pydantic for data validation."
    },
    {
        "id": 337,
        "topic": "Python / Backend",
        "question": "How does FastAPI validate data?",
        "answer": "Using Pydantic models with type annotations."
    },
    {
        "id": 338,
        "topic": "Python / Backend",
        "question": "What is Flask?",
        "answer": "A lightweight Python web framework with minimal structure and flexibility."
    },
    {
        "id": 339,
        "topic": "Python / Backend",
        "question": "How is Flask different from FastAPI?",
        "answer": "Flask is synchronous and unopinionated; FastAPI is async-ready, strongly typed, and\ngenerates docs automatically."
    },
    {
        "id": 340,
        "topic": "Python / Backend",
        "question": "What is Django?",
        "answer": "A full-stack Python web framework with ORM, templating, admin, and batteries-included\nphilosophy."
    },
    {
        "id": 341,
        "topic": "Python / Backend",
        "question": "When would you choose Django over Flask?",
        "answer": "When you need built-in admin, ORM, and a ready-to-use project structure."
    },
    {
        "id": 342,
        "topic": "Python / Backend",
        "question": "What are Django signals?",
        "answer": "Hooks that let you react to certain actions (e.g., post-save, pre-delete) within models."
    },
    {
        "id": 343,
        "topic": "Python / Backend",
        "question": "What is Celery in Python?",
        "answer": "A distributed task queue used to run background jobs asynchronously (e.g., sending\nemails, processing files)."
    },
    {
        "id": 344,
        "topic": "Python / Backend",
        "question": "What is Redis used for in a backend system?",
        "answer": "As a cache, message broker (e.g., for Celery), session store, or key-value store."
    },
    {
        "id": 345,
        "topic": "Python / Backend",
        "question": "What is asyncio in Python?",
        "answer": "A module for writing single-threaded concurrent code using coroutines, event loop, and\nasync/await syntax."
    },
    {
        "id": 346,
        "topic": "Python / Backend",
        "question": "What is the `async` keyword used for?",
        "answer": "Declaring a coroutine function that can be paused using `await`."
    },
    {
        "id": 347,
        "topic": "Python / Backend",
        "question": "What does `await` do?",
        "answer": "It pauses execution until the awaited coroutine or future is resolved."
    },
    {
        "id": 348,
        "topic": "Python / Backend",
        "question": "What is an event loop?",
        "answer": "The core of an async system that manages and dispatches asynchronous tasks."
    },
    {
        "id": 349,
        "topic": "Python / Backend",
        "question": "What are coroutines?",
        "answer": "Functions defined with `async def` that can be paused and resumed, useful for async\nprogramming."
    },
    {
        "id": 350,
        "topic": "Python / Backend",
        "question": "What are some popular async libraries in Python?",
        "answer": "aiohttp, httpx, FastAPI, aiomysql, aioredis."
    },
    {
        "id": 351,
        "topic": "Python / Backend",
        "question": "What are middlewares in web frameworks?",
        "answer": "Components that process requests or responses globally before hitting route handlers."
    },
    {
        "id": 352,
        "topic": "Python / Backend",
        "question": "What are Python type hints used for?",
        "answer": "Providing static type information to help with IDEs, linters, and tools like FastAPI and\nMyPy."
    },
    {
        "id": 353,
        "topic": "Python / Backend",
        "question": "What is dependency injection in FastAPI?",
        "answer": "A system for passing shared resources (like DB connections) into route handlers."
    },
    {
        "id": 354,
        "topic": "Python / Backend",
        "question": "How do you handle exceptions globally in FastAPI?",
        "answer": "Using custom exception handlers via `@app.exception_handler`."
    },
    {
        "id": 355,
        "topic": "Python / Backend",
        "question": "How do you write unit tests for FastAPI?",
        "answer": "Using pytest and TestClient to simulate HTTP requests."
    },
    {
        "id": 356,
        "topic": "Python / Backend",
        "question": "How can you optimize API performance?",
        "answer": "Caching, pagination, indexing, minimizing payload size, async I/O, batching requests."
    },
    {
        "id": 357,
        "topic": "Python / Backend",
        "question": "What are Python virtual environments?",
        "answer": "Isolated environments to manage project-specific dependencies without conflicts."
    },
    {
        "id": 358,
        "topic": "Python / Backend",
        "question": "What is the difference between pip and poetry?",
        "answer": "pip is a basic package manager; poetry is a full-fledged dependency manager and\nbuild tool."
    },
    {
        "id": 359,
        "topic": "Python / Backend",
        "question": "What is the Python dataclasses module?",
        "answer": "A decorator and module that auto-generates methods like `__init__`, `__repr__`, and\n`__eq__`."
    },
    {
        "id": 360,
        "topic": "Python / Backend",
        "question": "What is linting in Python?",
        "answer": "Checking code for syntax errors, stylistic issues, and bugs (e.g., using flake8, pylint)."
    },
    {
        "id": 361,
        "topic": "Python / Backend",
        "question": "What is a Python wheel?",
        "answer": "A built distribution format that allows for faster and easier installations."
    },
    {
        "id": 362,
        "topic": "Python / Backend",
        "question": "What is the uvicorn server used for?",
        "answer": "An ASGI server used to run FastAPI and other async Python applications."
    },
    {
        "id": 363,
        "topic": "Python / Backend",
        "question": "What is ASGI?",
        "answer": "Asynchronous Server Gateway Interface \u2014 the standard for Python async web\napplications (successor to WSGI)."
    },
    {
        "id": 364,
        "topic": "Python / Backend",
        "question": "What is gunicorn?",
        "answer": "A WSGI HTTP server for running Python web apps like Flask and Django."
    },
    {
        "id": 365,
        "topic": "Python / Backend",
        "question": "What is the difference between WSGI and ASGI?",
        "answer": "WSGI supports only synchronous apps; ASGI supports both synchronous and\nasynchronous apps."
    },
    {
        "id": 366,
        "topic": "Python / Backend",
        "question": "What are Python futures and tasks?",
        "answer": "Abstractions for results of asynchronous operations, used with asyncio."
    },
    {
        "id": 367,
        "topic": "Python / Backend",
        "question": "What is rate limiting?",
        "answer": "A technique to control the number of API requests from a user or client over time."
    },
    {
        "id": 368,
        "topic": "Python / Backend",
        "question": "How can you implement rate limiting in FastAPI?",
        "answer": "Using tools like slowapi or middleware to count and limit requests."
    },
    {
        "id": 369,
        "topic": "Python / Backend",
        "question": "What is the difference between deepcopy and copy in Python?",
        "answer": "copy creates a shallow copy (one level), deepcopy recursively copies all nested\nobjects."
    },
    {
        "id": 370,
        "topic": "Python / Backend",
        "question": "How can you profile performance in Python?",
        "answer": "Using cProfile, line_profiler, or external tools like Py-Spy."
    },
    {
        "id": 371,
        "topic": "Python / Backend",
        "question": "What is monkey patching?",
        "answer": "Modifying or extending code at runtime, often used for testing or overriding behavior."
    },
    {
        "id": 372,
        "topic": "Python / Backend",
        "question": "What are some Python design patterns used in backends?",
        "answer": "Singleton, Factory, Repository, Service, Adapter, Observer."
    },
    {
        "id": 373,
        "topic": "Python / Backend",
        "question": "How would you implement a service layer in a Python backend?",
        "answer": "Create classes that encapsulate business logic separate from the routes and models."
    },
    {
        "id": 374,
        "topic": "Python / Backend",
        "question": "What\u2019s the purpose of a repository pattern?",
        "answer": "To abstract database operations behind an interface to decouple infrastructure from\nbusiness logic."
    },
    {
        "id": 375,
        "topic": "Python / Backend",
        "question": "What is a DTO (Data Transfer Object)?",
        "answer": "A class that carries data between processes or layers, often used with Pydantic models\nin FastAPI."
    },
    {
        "id": 376,
        "topic": "Python / Backend",
        "question": "What is a Python lambda?",
        "answer": "An anonymous, one-liner function defined with `lambda` keyword."
    },
    {
        "id": 377,
        "topic": "Python / Backend",
        "question": "What are Python *args and **kwargs?",
        "answer": "Used to pass a variable number of positional (`*args`) or keyword (`**kwargs`)\narguments to a function."
    },
    {
        "id": 378,
        "topic": "Python / Backend",
        "question": "How do you handle background tasks in FastAPI?",
        "answer": "Using BackgroundTasks from FastAPI or external task queues like Celery for long running jobs."
    },
    {
        "id": 379,
        "topic": "JavaScript",
        "question": "What is the difference between innerHTML and textContent ?",
        "answer": "innerHTML parses and renders HTML.\ntextContent only returns plain text."
    },
    {
        "id": 380,
        "topic": "JavaScript",
        "question": "What is the difference between var a = b = 5; and var a = 5, b = 5; ?",
        "answer": "var a = b = 5; assigns b to global scope (if not declared).\nvar a = 5, b = 5; declares both in local scope."
    },
    {
        "id": 381,
        "topic": "JavaScript",
        "question": "Why is typeof NaN equal to \"number\" ?",
        "answer": "Because NaN is technically a numeric type, though it means \"Not-a-Number\"."
    },
    {
        "id": 382,
        "topic": "JavaScript",
        "question": "What is the difference between shallow equality ( == ) and strict equality ( === )?",
        "answer": "== : Performs type coercion.\n=== : Checks type and value."
    },
    {
        "id": 383,
        "topic": "JavaScript",
        "question": "What is the difference between Object.freeze() and Object.seal() ?",
        "answer": "freeze : Prevents adding, deleting, or modifying properties.\nseal : Prevents adding/deleting but allows modifying."
    },
    {
        "id": 384,
        "topic": "JavaScript",
        "question": "What is the difference between null and undefined ?",
        "answer": "null is an intentional absence of value.\nundefined means a variable is declared but not assigned."
    },
    {
        "id": 385,
        "topic": "JavaScript",
        "question": "Explain the concept of a pure function.",
        "answer": "A pure function always returns the same output for the same inputs and has no side\neffects."
    },
    {
        "id": 386,
        "topic": "JavaScript",
        "question": "What is the difference between function and function* ?",
        "answer": "function* creates a generator function that returns an iterator."
    },
    {
        "id": 387,
        "topic": "JavaScript",
        "question": "What is the difference between Object.seal and Object.freeze ?",
        "answer": "seal : Prevents adding/removing properties, but allows modification.\nfreeze : Prevents adding/removing/modifying properties."
    },
    {
        "id": 388,
        "topic": "JavaScript",
        "question": "What is the difference between in and hasOwnProperty ?",
        "answer": "in : Checks if a property exists in the object or prototype.\nhasOwnProperty : Checks only the object itself."
    },
    {
        "id": 389,
        "topic": "JavaScript",
        "question": "What is the difference between getElementById and querySelector ?",
        "answer": "getElementById : Selects element by ID.\nquerySelector : Selects first element matching a CSS selector."
    },
    {
        "id": 390,
        "topic": "JavaScript",
        "question": "What is the difference between event.preventDefault() and",
        "answer": "event.stopPropagation() ?\npreventDefault : Stops default browser behavior.\nstopPropagation : Stops event from bubbling/capturing further."
    },
    {
        "id": 391,
        "topic": "JavaScript",
        "question": "What is requestAnimationFrame used for?",
        "answer": "It schedules animations to run before the next repaint, improving performance."
    },
    {
        "id": 392,
        "topic": "JavaScript",
        "question": "What is the difference between setInterval and setTimeout ?",
        "answer": "setTimeout : Runs a function once after delay.\nsetInterval : Repeats function at intervals."
    },
    {
        "id": 393,
        "topic": "JavaScript",
        "question": "What is the shadow DOM?",
        "answer": "A DOM subtree encapsulated from the main document to avoid CSS/JS conflicts."
    },
    {
        "id": 394,
        "topic": "JavaScript",
        "question": "What is event throttling?",
        "answer": "Ensuring a function executes at most once per specified time interval."
    },
    {
        "id": 395,
        "topic": "JavaScript",
        "question": "What is event debouncing?",
        "answer": "Delaying function execution until after a pause in events."
    },
    {
        "id": 396,
        "topic": "JavaScript",
        "question": "What is the difference between synchronous and asynchronous event",
        "answer": "listeners?\nMost event listeners are synchronous, but async functions can be used to handle\nasync tasks."
    },
    {
        "id": 397,
        "topic": "JavaScript",
        "question": "What is a web worker?",
        "answer": "A script that runs in a separate thread, preventing blocking of the main UI thread."
    },
    {
        "id": 398,
        "topic": "JavaScript",
        "question": "What is the difference between a polyfill and a transpiler?",
        "answer": "Polyfill: Code that adds missing features to older environments.\nTranspiler: Converts modern syntax into older syntax."
    },
    {
        "id": 399,
        "topic": "JavaScript",
        "question": "What is code splitting in JavaScript?",
        "answer": "Breaking application code into smaller chunks for lazy loading."
    },
    {
        "id": 400,
        "topic": "JavaScript",
        "question": "What is tree shaking in JavaScript?",
        "answer": "Removing unused code during bundling to optimize size."
    },
    {
        "id": 401,
        "topic": "JavaScript",
        "question": "What is the difference between localStorage , sessionStorage , and cookies ?",
        "answer": "localStorage : Persistent storage, no expiration.\nsessionStorage : Clears when session ends.\ncookies : Small data sent to server with each request."
    },
    {
        "id": 402,
        "topic": "JavaScript",
        "question": "What is IndexedDB?",
        "answer": "A low-level API for storing large amounts of structured data in the browser."
    },
    {
        "id": 403,
        "topic": "JavaScript",
        "question": "What are ES modules?",
        "answer": "JavaScript module system using import and export ."
    },
    {
        "id": 404,
        "topic": "JavaScript",
        "question": "What is the difference between CommonJS and ES Modules?",
        "answer": "CommonJS: Uses require / module.exports (synchronous).\nES Modules: Uses import / export (asynchronous, static)."
    },
    {
        "topic": "System Design",
        "question": "What is the CAP Theorem?",
        "answer": "The CAP theorem states that a distributed system can only guarantee two out of three properties at the same time: Consistency (all nodes see the same data at the same time), Availability (every request receives a response about whether it succeeded or failed), and Partition tolerance (the system continues to operate despite arbitrary network partitioning).",
        "id": 405
    },
    {
        "topic": "System Design",
        "question": "Explain the difference between vertical scaling (scaling up) and horizontal scaling (scaling out).",
        "answer": "Vertical scaling means adding more power (CPU, RAM) to an existing machine. Horizontal scaling means adding more machines into your pool of resources.",
        "id": 406
    },
    {
        "topic": "System Design",
        "question": "What is a load balancer?",
        "answer": "A load balancer acts as the 'traffic cop' sitting in front of your servers and routing client requests across all servers capable of fulfilling those requests in a manner that maximizes speed and capacity utilization.",
        "id": 407
    },
    {
        "topic": "System Design",
        "question": "What is consistent hashing?",
        "answer": "Consistent hashing is a distributed hashing scheme that operates independently of the number of servers or objects in a distributed hash table by assigning them a position on an abstract circle, or hash ring. This allows servers and objects to scale without affecting the overall system.",
        "id": 408
    },
    {
        "topic": "System Design",
        "question": "What is the difference between a forward proxy and a reverse proxy?",
        "answer": "A forward proxy sits in front of client machines and intercepts outbound requests to the internet. A reverse proxy sits in front of backend servers and intercepts incoming requests from clients.",
        "id": 409
    },
    {
        "topic": "Cloud / AWS",
        "question": "What is an AWS EC2 instance?",
        "answer": "Amazon Elastic Compute Cloud (EC2) is a web service that provides secure, resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers.",
        "id": 410
    },
    {
        "topic": "Cloud / AWS",
        "question": "What is the difference between S3 and EBS in AWS?",
        "answer": "S3 (Simple Storage Service) is object storage suitable for storing static files, backups, and media. EBS (Elastic Block Store) is block-level storage used as primary storage for file systems or databases running on EC2 instances.",
        "id": 411
    },
    {
        "topic": "Cloud / AWS",
        "question": "What is AWS Lambda?",
        "answer": "AWS Lambda is a serverless compute service that lets you run code without provisioning or managing servers, creating workload-aware cluster scaling logic, maintaining event integrations, or managing runtimes.",
        "id": 412
    },
    {
        "topic": "Cloud / AWS",
        "question": "What is the difference between an Application Load Balancer (ALB) and a Network Load Balancer (NLB)?",
        "answer": "An ALB operates at Layer 7 (Application layer) and routes traffic based on the content of the request. An NLB operates at Layer 4 (Transport layer) and routes traffic based on IP protocol data, capable of handling millions of requests per second at ultra-low latencies.",
        "id": 413
    },
    {
        "topic": "Cloud / AWS",
        "question": "What is an IAM Role?",
        "answer": "An IAM role is an AWS identity with permission policies that determine what the identity can and cannot do in AWS. Unlike an IAM user, a role does not have long-term credentials (password or access keys) and can be assumed by anyone who needs it.",
        "id": 414
    },
    {
        "topic": "Networking",
        "question": "What is the OSI model?",
        "answer": "The Open Systems Interconnection (OSI) model is a conceptual model that characterizes and standardizes the communication functions of a telecommunication or computing system. It has 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application.",
        "id": 415
    },
    {
        "topic": "Networking",
        "question": "What is the difference between TCP and UDP?",
        "answer": "TCP (Transmission Control Protocol) is connection-oriented, reliable, and guarantees delivery of packets in order. UDP (User Datagram Protocol) is connectionless, unreliable, and does not guarantee delivery or order, but it is faster and has lower latency.",
        "id": 416
    },
    {
        "topic": "Networking",
        "question": "What happens when you type google.com in your browser?",
        "answer": "1. The browser checks its cache for the IP address.\n2. If not found, it makes a DNS query to find the IP.\n3. The browser initiates a TCP connection with the server.\n4. If HTTPS, a TLS handshake occurs.\n5. The browser sends an HTTP GET request.\n6. The server handles the request and sends back an HTTP response.\n7. The browser renders the HTML content.",
        "id": 417
    },
    {
        "topic": "Networking",
        "question": "What is DNS?",
        "answer": "The Domain Name System (DNS) is the phonebook of the Internet. Humans access information online through domain names, like google.com. Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources.",
        "id": 418
    },
    {
        "topic": "Networking",
        "question": "What is a CDN?",
        "answer": "A Content Delivery Network (CDN) is a geographically distributed group of servers which work together to provide fast delivery of Internet content by caching static assets closer to the users.",
        "id": 419
    },
    {
        "topic": "Databases / SQL",
        "question": "What is the difference between an INNER JOIN and a LEFT JOIN?",
        "answer": "An INNER JOIN returns records that have matching values in both tables. A LEFT JOIN returns all records from the left table, and the matched records from the right table (or NULL if no match).",
        "id": 420
    },
    {
        "topic": "Databases / SQL",
        "question": "What is a clustered index vs a non-clustered index?",
        "answer": "A clustered index determines the physical order of data in a table, so there can only be one per table. A non-clustered index is stored separately from the data and points to the physical rows, allowing for multiple non-clustered indexes per table.",
        "id": 421
    },
    {
        "topic": "Databases / SQL",
        "question": "What is a database transaction?",
        "answer": "A transaction is a single unit of work that consists of one or more operations. It must be atomic, consistent, isolated, and durable (ACID). If any operation fails, the entire transaction is rolled back.",
        "id": 422
    },
    {
        "topic": "Databases / SQL",
        "question": "What is the N+1 query problem?",
        "answer": "The N+1 query problem occurs when a data access framework executes 1 query to retrieve a list of entities, and then executes N additional queries to fetch a related entity for each of the N entities in the list. This leads to severe performance degradation.",
        "id": 423
    },
    {
        "topic": "Databases / SQL",
        "question": "Explain database replication vs database partitioning (sharding).",
        "answer": "Replication is creating identical copies of the database across multiple servers for high availability and read scalability. Partitioning (sharding) divides the database into smaller, distinct parts (shards) distributed across multiple servers to improve write scalability and capacity.",
        "id": 424
    },
    {
        "topic": "Git / Version Control",
        "question": "What is the difference between git merge and git rebase?",
        "answer": "git merge combines two branches by creating a new merge commit, preserving the history of both branches. git rebase moves the feature branch onto the tip of the target branch, creating a linear, cleaner history by rewriting the commits.",
        "id": 425
    },
    {
        "topic": "Git / Version Control",
        "question": "What is a detached HEAD in Git?",
        "answer": "A detached HEAD state occurs when you checkout a specific commit instead of a branch. In this state, any new commits you make will not belong to any branch and will be lost when you switch branches unless you create a new branch from them.",
        "id": 426
    },
    {
        "topic": "Git / Version Control",
        "question": "How do you undo the last commit without losing changes?",
        "answer": "Run `git reset --soft HEAD~1`. This will remove the commit from the history but keep your changes in the staging area (index) so you can modify them and commit again.",
        "id": 427
    },
    {
        "topic": "Git / Version Control",
        "question": "What is the purpose of git stash?",
        "answer": "git stash temporarily shelves (or stashes) changes you've made to your working copy so you can work on something else, and then come back and re-apply them later on.",
        "id": 428
    },
    {
        "topic": "Git / Version Control",
        "question": "What is a Git cherry-pick?",
        "answer": "git cherry-pick enables you to pick a single commit from a branch and apply it to another. This is useful when you want to port a specific bug fix or feature without merging the entire branch.",
        "id": 429
    },
    {
        "id": 430,
        "topic": "JavaScript",
        "question": "What will the console log in this example?\n\n```js\nvar foo = 1\nvar foobar = function() {\n  console.log(foo)\n  var foo = 2\n}\nfoobar()\n```",
        "answer": "Due to hoisting, the local variable `foo` is declared before the `console.log` method is called. This means the local variable `foo` is passed as an argument to `console.log()` instead of the global one declared outside of the function. However, since the value is not hoisted with the variable declaration, the output will be `undefined`, not `2`."
    },
    {
        "id": 431,
        "topic": "JavaScript",
        "question": "How does prototypal inheritance differ from classical inheritance?",
        "answer": "In the classical inheritance paradigm, object instances inherit their properties and functions from a class, which acts as a blueprint for the object. Object instances are typically created using a constructor and the `new` keyword.\n\nIn the prototypal inheritance paradigm, object instances inherit directly from other objects and are typically created using factory functions or `Object.create()`."
    },
    {
        "id": 432,
        "topic": "JavaScript",
        "question": "What is the output of the following code?\n\n```js\nconst a = [1, 2, 3]\nconst b = [1, 2, 3]\nconst c = \"1,2,3\"\n\nconsole.log(a == c)\nconsole.log(a == b)\n```",
        "answer": "The first `console.log` outputs `true` because JavaScript's compiler performs type conversion and therefore it compares to strings by their value. On the other hand, the second `console.log` outputs `false` because Arrays are Objects and Objects are compared by reference."
    },
    {
        "id": 433,
        "topic": "Node",
        "question": "How can you avoid callback hells?\n\n```js\ngetData(function(a) {\n  getMoreData(a, function(b) {\n    getMoreData(b, function(c) {\n      getMoreData(c, function(d) {\n        getMoreData(d, function(e) {\n          // ...\n        })\n      })\n    })\n  })\n})\n```",
        "answer": "Refactoring the functions to return promises and using `async/await` is usually the best option. Instead of supplying the functions with callbacks that cause deep nesting, they return a promise that can be `await`ed and will be resolved once the data has arrived, allowing the next line of code to be evaluated in a sync-like fashion.\n\nThe above code can be restructured like so:\n\n```js\nasync function asyncAwaitVersion() {\n  const a = await getData()\n  const b = await getMoreData(a)\n  const c = await getMoreData(b)\n  const d = await getMoreData(c)\n  const e = await getMoreData(d)\n  // ...\n}\n```\n\nThere are lots of ways to solve the issue of callback hells:\n\n* Modularization: break callbacks into independent functions\n* Use a control flow library, like async\n* Use generators with Promises\n* Use async/await (from v7 on)"
    },
    {
        "id": 434,
        "topic": "JavaScript",
        "question": "What is the difference between `null` and `undefined`?",
        "answer": "In JavaScript, two values discretely represent nothing - `undefined` and `null`. The concrete difference between them is that `null` is explicit, while `undefined` is implicit. When a property does not exist or a variable has not been given a value, the value is `undefined`. `null` is set as the value to explicitly indicate \u201cno value\u201d. In essence, `undefined` is used when the nothing is not known, and `null` is used when the nothing is known."
    },
    {
        "id": 435,
        "topic": "HTML",
        "question": "Briefly describe the correct usage of the following HTML5 semantic elements: `<header>`, `<article>`,`<section>`, `<footer>`",
        "answer": "* `<header>` is used to contain introductory and navigational information about a section of the page. This can include the section heading, the author\u2019s name, time and date of publication, table of contents, or other navigational information.\n\n* `<article>` is meant to house a self-contained composition that can logically be independently recreated outside of the page without losing its meaning. Individual blog posts or news stories are good examples.\n\n* `<section>` is a flexible container for holding content that shares a common informational theme or purpose.\n\n* `<footer>` is used to hold information that should appear at the end of a section of content and contain additional information about the section. Author\u2019s name, copyright information, and related links are typical examples of such content."
    },
    {
        "id": 436,
        "topic": "Accessibility",
        "question": "What is the Accessibility Tree?",
        "answer": "The Accessibility Tree is a structure produced by the browser's Accessibility APIs which provides accessibility information to assistive technologies such as screen readers. \nIt runs parallel to the DOM and is similar to the DOM API, but with much fewer nodes, because a lot of that information is only useful for visual presentation. \nBy writing semantic HTML we can take advantage of this process in creating an accessible experience for our users."
    },
    {
        "id": 437,
        "topic": "JavaScript",
        "question": "Create a function `pipe` that performs left-to-right function composition by returning a function that accepts one argument.\n\n```js\nconst square = v => v * v\nconst double = v => v * 2\nconst addOne = v => v + 1\nconst res = pipe(square, double, addOne)\nres(3) // 19; addOne(double(square(3)))\n```",
        "answer": "Gather all supplied arguments using the rest operator `...` and return a unary function that uses `Array.prototype.reduce()` to run the value through the series of functions before returning the final value.\n\n```js\nconst pipe = (...fns) => x => fns.reduce((v, fn) => fn(v), x)\n```"
    },
    {
        "id": 438,
        "topic": "React",
        "question": "How do you write comments inside a JSX tree in React?",
        "answer": "Comments must be wrapped inside curly braces `{}` and use the `/* */` syntax.\n\n```jsx\nconst tree = (\n  <div>\n    {/* Comment */}\n    <p>Text</p>\n  </div>\n)\n```\n\n<!-- tags: (react) -->\n\n<!-- expertise: (0) -->"
    },
    {
        "id": 439,
        "topic": "JavaScript",
        "question": "Create a function that masks a string of characters with `#` except for the last four (4) characters.\n\n```js\nmask(\"123456789\") // \"#####6789\"\n```",
        "answer": "> There are many ways to solve this problem, this is just one one of them.\n\nUsing `String.prototype.slice()` we can grab the last 4 characters of the string by passing `-4` as an argument. Then, using `String.prototype.padStart()`, we can pad the string to the original length with the repeated mask character.\n\n```js\nconst mask = (str, maskChar = \"#\") =>\n  str.slice(-4).padStart(str.length, maskChar)\n```"
    },
    {
        "id": 440,
        "topic": "React",
        "question": "What is the purpose of callback function as an argument of `setState`?",
        "answer": "The callback function is invoked when `setState` has finished and the component gets rendered. Since `setState` is asynchronous, the callback function is used for any post action.\n\n```js\nsetState({ name: \"sudheer\" }, () => {\n  console.log(\"The name has updated and component re-rendered\")\n})\n```"
    },
    {
        "id": 441,
        "topic": "React",
        "question": "What is the difference between HTML and React event handling?",
        "answer": "In HTML, the attribute name is in all lowercase and is given a string invoking a function defined somewhere:\n\n```html\n<button onclick=\"handleClick()\"></button>\n```\n\nIn React, the attribute name is camelCase and are passed the function reference inside curly braces:\n\n```js\n<button onClick={handleClick} />\n```\n\nIn HTML, `false` can be returned to prevent default behavior, whereas in React `preventDefault` has to be called explicitly.\n\n```html\n<a href=\"#\" onclick=\"console.log('The link was clicked.'); return false\" />\n```\n\n```js\nfunction handleClick(e) {\n  e.preventDefault()\n  console.log(\"The link was clicked.\")\n}\n```"
    },
    {
        "id": 442,
        "topic": "JavaScript",
        "question": "Generate an array, containing the Fibonacci sequence, up until the nth term.",
        "answer": "Initialize an empty array of length `n`. Use `Array.prototype.reduce()` to add values into the array, using the sum of the last two values, except for the first two.\n\n```js\nconst fibonacci = n =>\n  [...Array(n)].reduce(\n    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),\n    []\n  )\n```"
    },
    {
        "id": 443,
        "topic": "React",
        "question": "What are the different phases of the component lifecycle in React?",
        "answer": "There are four different phases of component\u2019s lifecycle:\n\n**Initialization**: In this phase, the component prepares setting up the initial state and default props.\n\n**Mounting**: The react component is ready to mount to the DOM. This phase covers the `getDerivedStateFromProps` and `componentDidMount` lifecycle methods.\n\n**Updating**: In this phase, the component gets updated in two ways, sending the new props and updating the state. This phase covers the `getDerivedStateFromProps`, `shouldComponentUpdate`, `getSnapshotBeforeUpdate` and `componentDidUpdate` lifecycle methods.\n\n**Unmounting**: In this last phase, the component is not needed and gets unmounted from the browser DOM. This phase includes the `componentWillUnmount` lifecycle method.\n\n**Error Handling**: In this phase, the component is called whenever there's an error during rendering, in a lifecycle method, or in the constructor for any child component. This phase includes the `componentDidCatch` lifecycle method.\n\n<img alt=\"lifecycle phases\" src=\"https://pbs.twimg.com/media/DZ-97vzW4AAbcZj.jpg:large\" style=\"width: 100%\"/>"
    },
    {
        "id": 444,
        "topic": "JavaScript",
        "question": "What is the difference between the array methods `map()` and `forEach()`?",
        "answer": "Both methods iterate through the elements of an array. `map()` maps each element to a new element by invoking the callback function on each element and returning a new array. On the other hand, `forEach()` invokes the callback function for each element but does not return a new array. `forEach()` is generally used when causing a side effect on each iteration, whereas `map()` is a common functional programming technique."
    },
    {
        "id": 445,
        "topic": "JavaScript",
        "question": "Explain the differences between imperative and declarative programming.",
        "answer": "These two types of programming can roughly be summarized as:\n\n* Imperative: **how** to achieve something\n* Declarative: **what** should be achieved\n\nA common example of declarative programming is CSS. The developer specifies CSS properties that describe what something should look like rather than how to achieve it. The \"how\" is abstracted away by the browser.\n\nOn the other hand, imperative programming involves the steps required to achieve something. In JavaScript, the differences can be contrasted like so:\n\n##### Imperative\n\n```js\nconst numbers = [1, 2, 3, 4, 5]\nconst numbersDoubled = []\nfor (let i = 0; i < numbers.length; i++) {\n  numbersDoubled[i] = numbers[i] * 2\n}\n```\n\nWe manually loop over the numbers of the array and assign the new index as the number doubled.\n\n##### Declarative\n\n```js\nconst numbers = [1, 2, 3, 4, 5]\nconst numbersDoubled = numbers.map(n => n * 2)\n```\n\nWe declare that the new array is mapped to a new one where each value is doubled."
    },
    {
        "id": 446,
        "topic": "JavaScript",
        "question": "What are truthy and falsy values in JavaScript?",
        "answer": "A value is either truthy or falsy depending on how it is evaluated in a Boolean context. Falsy means false-like and truthy means true-like. Essentially, they are values that are coerced to `true` or `false` when performing certain operations.\n\nThere are 6 falsy values in JavaScript. They are:\n\n* `false`\n* `undefined`\n* `null`\n* `\"\"` (empty string)\n* `NaN`\n* `0` (both `+0` and `-0`)\n\nEvery other value is considered truthy.\n\nA value's truthiness can be examined by passing it into the `Boolean` function.\n\n```js\nBoolean(\"\") // false\nBoolean([]) // true\n```\n\nThere is a shortcut for this using the logical NOT `!` operator. Using `!` once will convert a value to its inverse boolean equivalent (i.e. not false is true), and `!` once more will convert back, thus effectively converting the value to a boolean.\n\n```js\n!!\"\" // false\n!![] // true\n```"
    },
    {
        "id": 447,
        "topic": "Node",
        "question": "What is the event loop in Node.js?",
        "answer": "The event loop handles all async callbacks. Callbacks are queued in a loop, while other code runs, and will run one by one when the response for each one has been received."
    },
    {
        "id": 448,
        "topic": "HTML",
        "question": "Discuss the differences between an HTML specification and a browser\u2019s implementation thereof.",
        "answer": "HTML specifications such as `HTML5` define a set of rules that a document must adhere to in order to be \u201cvalid\u201d according to that specification. In addition, a specification provides instructions on how a browser must interpret and render such a document.\n\nA browser is said to \u201csupport\u201d a specification if it handles valid documents according to the rules of the specification. As of yet, no browser supports all aspects of the `HTML5` specification (although all of the major browser support most of it), and as a result, it is necessary for the developer to confirm whether the aspect they are making use of will be supported by all of the browsers on which they hope to display their content. This is why cross-browser support continues to be a headache for developers, despite the improved specificiations."
    },
    {
        "id": 449,
        "topic": "JavaScript",
        "question": "What is event-driven programming?",
        "answer": "Event-driven programming is a paradigm that involves building applications that send and receive events. When the program emits events, the program responds by running any callback functions that are registered to that event and context, passing in associated data to the function. With this pattern, events can be emitted into the wild without throwing errors even if no functions are subscribed to it.\n\nA common example of this is the pattern of elements listening to DOM events such as `click` and `mouseenter`, where a callback function is run when the event occurs.\n\n```js\ndocument.addEventListener(\"click\", function(event) {\n  // This callback function is run when the user\n  // clicks on the document.\n})\n```\n\nWithout the context of the DOM, the pattern may look like this:\n\n```js\nconst hub = createEventHub()\nhub.on(\"message\", function(data) {\n  console.log(`${data.username} said ${data.text}`)\n})\nhub.emit(\"message\", {\n  username: \"John\",\n  text: \"Hello?\"\n})\n```\n\nWith this implementation, `on` is the way to _subscribe_ to an event, while `emit` is the way to _publish_ the event."
    },
    {
        "id": 450,
        "topic": "Node",
        "question": "NodeJS often uses a callback pattern where if an error is encountered during execution, this error is passed as the first argument to the callback. What are the advantages of this pattern?\n\n```js\nfs.readFile(filePath, function(err, data) {\n  if (err) {\n    // handle the error, the return is important here\n    // so execution stops here\n    return console.log(err)\n  }\n  // use the data object\n  console.log(data)\n})\n```",
        "answer": "Advantages include:\n\n* Not needing to process data if there is no need to even reference it\n* Having a consistent API leads to more adoption\n* Ability to easily adapt a callback pattern that will lead to more maintainable code\n\nAs you can see from below example, the callback is called with null as its first argument if there is no error. However, if there is an error, you create an Error object, which then becomes the callback's only parameter. The callback function allows a user to easily know whether or not an error occurred.\n\nThis practice is also called the _Node.js error convention_, and this kind of callback implementations are called _error-first callbacks_.\n\n```js\nvar isTrue = function(value, callback) {\n  if (value === true) {\n    callback(null, \"Value was true.\")\n  } else {\n    callback(new Error(\"Value is not true!\"))\n  }\n}\n\nvar callback = function(error, retval) {\n  if (error) {\n    console.log(error)\n    return\n  }\n  console.log(retval)\n}\n\nisTrue(false, callback)\nisTrue(true, callback)\n\n/*\n  { stack: [Getter/Setter],\n    arguments: undefined,\n    type: undefined,\n    message: 'Value is not true!' }\n  Value was true.\n*/\n```"
    },
    {
        "id": 451,
        "topic": "HTML",
        "question": "What is the purpose of cache busting and how can you achieve it?",
        "answer": "Browsers have a cache to temporarily store files on websites so they don't need to be re-downloaded again when switching between pages or reloading the same page. The server is set up to send headers that tell the browser to store the file for a given amount of time. This greatly increases website speed and preserves bandwidth.\n\nHowever, it can cause problems when the website has been changed by developers because the user's cache still references old files. This can either leave them with old functionality or break a website if the cached CSS and JavaScript files are referencing elements that no longer exist, have moved or have been renamed.\n\nCache busting is the process of forcing the browser to download the new files. This is done by naming the file something different to the old file.\n\nA common technique to force the browser to re-download the file is to append a query string to the end of the file.\n\n* `src=\"js/script.js\"` => `src=\"js/script.js?v=2\"`\n\nThe browser considers it a different file but prevents the need to change the file name."
    },
    {
        "id": 452,
        "topic": "CSS",
        "question": "What are the advantages of using CSS preprocessors?",
        "answer": "CSS preprocessors add useful functionality that native CSS does not have, and generally make CSS neater and more maintainable by enabling DRY (Don't Repeat Yourself) principles. Their terse syntax for nested selectors cuts down on repeated code. They provide variables for consistent theming (however, CSS variables have largely replaced this functionality) and additional tools like color functions (`lighten`, `darken`, `transparentize`, etc), mixins, and loops that make CSS more like a real programming language and gives the developer more power to generate complex CSS."
    },
    {
        "id": 453,
        "topic": "React",
        "question": "What are the lifecycle methods in React?",
        "answer": "`getDerivedStateFromProps`: Executed before rendering on the initial mount and all component updates. Used to update the state based on changes in props over time. Has rare use cases, like tracking component animations during the lifecycle. There are only few cases where this makes sense to use over other lifecycle methods. It expects to return an object that will be the the new state, or null to update nothing. This method does not have access to the component instance either.\n\n`componentDidMount`: Executed after first rendering and here all AJAX requests, DOM or state updates, and set up eventListeners should occur.\n\n`shouldComponentUpdate`: Determines if the component will be updated or not. By default, it returns true. If you are sure that the component doesn't need to render after state or props are updated, you can return a false value. It is a great place to improve performance as it allows you to prevent a rerender if component receives new prop.\n\n`getSnapshotBeforeUpdate`: Invoked right after a component render happens because of an update, before `componentDidUpdate`. Any value returned from this method will be passed to `componentDidUpdate`.\n\n`componentDidUpdate`: Mostly it is used to update the DOM in response to prop or state changes.\n\n`componentWillUnmount`: It will be used to cancel any outgoing network requests, or remove all event listeners associated with the component.\n\n`componentDidCatch`: Used in error boundaries, which are components that implement this method. It allows the component to catch JavaScript errors anywhere in the _child_ component tree (below this component), log errors, and display a UI with error information."
    },
    {
        "id": 454,
        "topic": "JavaScript",
        "question": "What is the purpose of JavaScript UI libraries/frameworks like React, Vue, Angular, Hyperapp, etc?",
        "answer": "The main purpose is to avoid manipulating the DOM directly and keep the state of an application\nin sync with the UI easily. Additionally, they provide the ability to create components that can be reused when they have similar functionality with minor differences, avoiding duplication which would require multiple changes whenever the structure of a component which is reused in multiple places needs to be updated.\n\nWhen working with DOM manipulation libraries like jQuery, the data of an application is generally kept in the DOM itself, often as class names or `data` attributes. Manipulating the DOM to update the UI involves many extra steps and can introduce subtle bugs over time. Keeping the state separate and letting a framework handle the UI updates when the state changes reduces cognitive load. Saying you want the UI to look a certain way when the state is a certain value is the declarative way of creating an application, instead of the imperative way of manually updating the UI to reflect the new state."
    },
    {
        "id": 455,
        "topic": "CSS",
        "question": "What are the advantages of using CSS sprites and how are they utilized?",
        "answer": "CSS sprites combine multiple images into one image, limiting the number of HTTP requests a browser has to make, thus improving load times. Even under the new HTTP/2 protocol, this remains true.\n\nUnder HTTP/1.1, at most one request is allowed per TCP connection. With HTTP/1.1, modern browsers open multiple parallel connections (between 2 to 8) but it is limited. With HTTP/2, all requests between the browser and the server are multiplexed on a single TCP connection. This means the cost of opening and closing multiple connections is mitigated, resulting in a better usage of the TCP connection and limits the impact of latency between the client and server. It could then become possible to load tens of images in parallel on the same TCP connection.\n\nHowever, according to [benchmark results](https://blog.octo.com/en/http2-arrives-but-sprite-sets-aint-no-dead/), although HTTP/2 offers 50% improvement over HTTP/1.1, in most cases the sprite set is still faster to load than individual images.\n\nTo utilize a spritesheet in CSS, one would use certain properties, such as `background-image`, `background-position` and `background-size` to ultimately alter the `background` of an element."
    },
    {
        "id": 456,
        "topic": "JavaScript",
        "question": "How does hoisting work in JavaScript?",
        "answer": "Hoisting is a JavaScript mechanism where variable and function declarations are put into memory during the compile phase. This means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.\n\nHowever, the value is not hoisted with the declaration.\n\nThe following snippet:\n\n```js\nconsole.log(hoist)\nvar hoist = \"value\"\n```\n\nis equivalent to:\n\n```js\nvar hoist\nconsole.log(hoist)\nhoist = \"value\"\n```\n\nTherefore logging `hoist` outputs `undefined` to the console, not `\"value\"`.\n\nHoisting also allows you to invoke a function declaration before it appears to be declared in a program.\n\n```js\nmyFunction() // No error; logs \"hello\"\nfunction myFunction() {\n  console.log(\"hello\")\n}\n```\n\nBut be wary of function expressions that are assigned to a variable:\n\n```js\nmyFunction() // Error: `myFunction` is not a function\nvar myFunction = function() {\n  console.log(\"hello\")\n}\n```"
    },
    {
        "id": 457,
        "topic": "JavaScript",
        "question": "Contrast mutable and immutable values, and mutating vs non-mutating methods.",
        "answer": "The two terms can be contrasted as:\n\n* Mutable: subject to change\n* Immutable: cannot change\n\nIn JavaScript, objects are mutable while primitive values are immutable. This means operations performed on objects can change the original reference in some way, while operations performed on a primitive value cannot change the original value.\n\nAll `String.prototype` methods do not have an effect on the original string and return a new string. On the other hand, while some methods of `Array.prototype` do not mutate the original array reference and produce a fresh array, some cause mutations.\n\n```js\nconst myString = \"hello!\"\nmyString.replace(\"!\", \"\") // returns a new string, cannot mutate the original value\n\nconst originalArray = [1, 2, 3]\noriginalArray.push(4) // mutates originalArray, now [1, 2, 3, 4]\noriginalArray.concat(4) // returns a new array, does not mutate the original\n```"
    },
    {
        "id": 458,
        "topic": "React",
        "question": "What is the difference between an element and a component in React?",
        "answer": "An element is a plain JavaScript object that represents a DOM node or component. Elements are pure and never mutated, and are cheap to create.\n\nA component is a function or class. Components can have state and take props as input and return an element tree as output (although they can represent generic containers or wrappers and don't necessarily have to emit DOM). Components can initiate side effects in lifecycle methods (e.g. AJAX requests, DOM mutations, interfacing with 3rd party libraries) and may be expensive to create.\n\n```js\nconst Component = () => \"Hello\"\nconst componentElement = <Component />\nconst domNodeElement = <div />\n```"
    },
    {
        "id": 459,
        "topic": "React",
        "question": "What is a key? What are the benefits of using it in lists?",
        "answer": "Keys are a special string attribute that helps React identify which items have been changed, added or removed. They are used when rendering array elements to give them a stable identity. Each element's key must be unique (e.g. IDs from the data or indexes as a last resort).\n\n```js\nconst todoItems = todos.map(todo => <li key={todo.id}>{todo.text}</li>)\n```\n\n* Using indexes as keys is not recommended if the order of items may change, as it might negatively impact performance and may cause issues with component state.\n* If you extract list items as a separate component then apply keys on the list component instead of the `<li>` tag."
    },
    {
        "id": 460,
        "topic": "JavaScript",
        "question": "What does the following code evaluate to?\n\n```js\ntypeof typeof 0\n```",
        "answer": "It evaluates to `\"string\"`.\n\n`typeof 0` evaluates to the string `\"number\"` and therefore `typeof \"number\"` evaluates to `\"string\"`."
    },
    {
        "id": 461,
        "topic": "JavaScript",
        "question": "What is the reason for wrapping the entire contents of a JavaScript source file in a function that is immediately invoked?",
        "answer": "This technique is very common in JavaScript libraries. It creates a closure around the entire contents of the file which creates a private namespace and thereby helps avoid potential name clashes between different JavaScript modules and libraries. The function is immediately invoked so that the namespace (library name) is assigned the return value of the function.\n\n```js\nconst myLibrary = (function() {\n  var privateVariable = 2\n  return {\n    publicMethod: () => privateVariable\n  }\n})()\nprivateVariable // ReferenceError\nmyLibrary.publicMethod() // 2\n```"
    },
    {
        "id": 462,
        "topic": "React",
        "question": "How do you ensure methods have the correct `this` context in React component classes?",
        "answer": "In JavaScript classes, the methods are not bound by default. This means that their `this` context can be changed (in the case of an event handler, to the element that is listening to the event) and will not refer to the component instance. To solve this, `Function.prototype.bind()` can be used to enforce the `this` context as the component instance.\n\n```js\nconstructor(props) {\n  super(props);\n  this.handleClick = this.handleClick.bind(this);\n}\n\nhandleClick() {\n  // Perform some logic\n}\n```\n\n* The `bind` approach can be verbose and requires defining a `constructor`, so the new public class fields syntax is generally preferred:\n\n```js\nhandleClick = () => {\n  console.log('this is:', this);\n}\n\nrender() {\n  return (\n    <button onClick={this.handleClick}>\n      Click me\n    </button>\n  );\n}\n```\n\n* You can also use an inline arrow function, because lexical `this` (referring to the component instance) is preserved:\n\n```js\n<button onClick={e => this.handleClick(e)}>Click me</button>\n```\n\nNote that extra re-rendering can occur using this technique because a new function reference is created on render, which gets passed down to child components and breaks `shouldComponentUpdate` / `PureComponent` shallow equality checks to prevent unnecessary re-renders. In cases where performance is important, it is preferred to go with `bind` in the constructor, or the public class fields syntax approach, because the function reference remains constant."
    },
    {
        "id": 463,
        "topic": "JavaScript",
        "question": "What is the difference between the postfix `i++` and prefix `++i` increment operators?",
        "answer": "Both increment the variable value by 1. The difference is what they evaluate to.\n\nThe postfix increment operator evaluates to the value _before_ it was incremented.\n\n```js\nlet i = 0\ni++ // 0\n// i === 1\n```\n\nThe prefix increment operator evaluates to the value _after_ it was incremented.\n\n```js\nlet i = 0\n++i // 1\n// i === 1\n```"
    },
    {
        "id": 464,
        "topic": "HTML",
        "question": "What is HTML5 Web Storage? Explain `localStorage` and `sessionStorage`.",
        "answer": "With HTML5, web pages can store data locally within the user\u2019s browser.\nThe data is stored in name/value pairs, and a web page can only access data stored by itself.\n\n**Differences between `localStorage` and `sessionStorage` regarding lifetime:**\n\n* Data stored through `localStorage` is permanent: it does not expire and remains stored on the user\u2019s computer until a web app deletes it or the user asks the browser to delete it.\n* `sessionStorage` has the same lifetime as the top-level window or browser tab in which the data got stored. When the tab is permanently closed, any data stored through `sessionStorage` is deleted.\n\n**Differences between `localStorage` and `sessionStorage` regarding storage scope:**\nBoth forms of storage are scoped to the document origin so that documents with different origins will never share the stored objects.\n\n* `sessionStorage` is also scoped on a per-window basis. Two browser tabs with documents from the same origin have separate `sessionStorage` data.\n* Unlike in `localStorage`, the same scripts from the same origin can't access each other's `sessionStorage` when opened in different tabs."
    },
    {
        "id": 465,
        "topic": "JavaScript",
        "question": "What are Promises?",
        "answer": "The `Promise` object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.\nAn example can be the following snippet, which after 100ms prints out the result string to the standard output. Also, note the catch, which can be used for error handling. `Promise`s are chainable.\n\n```js\nnew Promise((resolve, reject) => {\n  setTimeout(() => {\n    resolve(\"result\")\n  }, 100)\n})\n  .then(console.log)\n  .catch(console.error)\n```"
    },
    {
        "id": 466,
        "topic": "Accessibility",
        "question": "What is WCAG? What are the differences between A, AA, and AAA compliance?",
        "answer": "WCAG stands for \"Web Content Accessibility Guidelines\". It is a standard describing how to make web content more accessible to people with disabilities\nThey have 12-13 guidelines and for each one, there are testable success criteria, which are at three levels: A, AA, and AAA. The higher the level, the higher the impact on the design of the web content. The higher the level, the web content is essentially more accessible by more users.\nDepending on where you live/work, there may be regulations requiring websites to meet certain levels of compliance. For instance, in Ontario, Canada, beginning January 1, 2021 all public websites and web content posted after January 1, 2012 must meet AA compliance."
    },
    {
        "id": 467,
        "topic": "CSS",
        "question": "Can you name the four types of `@media` properties?",
        "answer": "* `all`, which applies to all media type devices\n* `print`, which only applies to printers\n* `screen`, which only applies to screens (desktops, tablets, mobile etc.)\n* `speech`, which only applies to screenreaders"
    },
    {
        "id": 468,
        "topic": "JavaScript",
        "question": "Are semicolons required in JavaScript?",
        "answer": "Sometimes. Due to JavaScript's automatic semicolon insertion, the interpreter places semicolons after most statements. This means semicolons can be omitted in most cases.\n\nHowever, there are some cases where they are required. They are not required at the beginning of a block, but are if they follow a line and:\n\n1.  The line starts with `[`\n\n```js\nconst previousLine = 3\n;[1, 2, previousLine].map(n => n * 2)\n```\n\n2.  The line starts with `(`\n\n```js\nconst previousLine = 3\n;(function() {\n  // ...\n})()\n```\n\nIn the above cases, the interpreter does not insert a semicolon after `3`, and therefore it will see the `3` as attempting object property access or being invoked as a function, which will throw errors."
    },
    {
        "id": 469,
        "topic": "JavaScript",
        "question": "What is a callback? Can you show an example using one?",
        "answer": "Callbacks are functions passed as an argument to another function to be executed once an event has occurred or a certain task is complete, often used in asynchronous code. Callback functions are invoked later by a piece of code but can be declared on initialization without being invoked.\n\nAs an example, event listeners are asynchronous callbacks that are only executed when a specific event occurs.\n\n```js\nfunction onClick() {\n  console.log(\"The user clicked on the page.\")\n}\ndocument.addEventListener(\"click\", onClick)\n```\n\nHowever, callbacks can also be synchronous. The following `map` function takes a callback function that is invoked synchronously for each iteration of the loop (array element).\n\n```js\nconst map = (arr, callback) => {\n  const result = []\n  for (let i = 0; i < arr.length; i++) {\n    result.push(callback(arr[i], i))\n  }\n  return result\n}\nmap([1, 2, 3, 4, 5], n => n * 2) // [2, 4, 6, 8, 10]\n```"
    },
    {
        "id": 470,
        "topic": "CSS",
        "question": "What is a focus ring? What is the correct solution to handle them?",
        "answer": "A focus ring is a visible outline given to focusable elements such as buttons and anchor tags. It varies depending on the vendor, but generally it appears as a blue outline around the element to indicate it is currently focused.\n\nIn the past, many people specified `outline: 0;` on the element to remove the focus ring. However, this causes accessibility issues for keyboard users because the focus state may not be clear. When not specified though, it causes an unappealing blue ring to appear around an element.\n\nIn recent times, frameworks like Bootstrap have opted to use a more appealing `box-shadow` outline to replace the default focus ring. However, this is still not ideal for mouse users.\n\nThe best solution is an upcoming pseudo-selector `:focus-visible` which can be polyfilled today with JavaScript. It will only show a focus ring if the user is using a keyboard and leave it hidden for mouse users. This keeps both aesthetics for mouse use and accessibility for keyboard use."
    },
    {
        "id": 471,
        "topic": "CSS",
        "question": "Can you describe how CSS specificity works?",
        "answer": "Assuming the browser has already determined the set of rules for an element, each rule is assigned a matrix of values, which correspond to the following from highest to lowest specificity:\n\n* Inline rules (binary - 1 or 0)\n* Number of id selectors\n* Number of class, pseudo-class and attribute selectors\n* Number of tags and pseudo-element selectors\n\nWhen two selectors are compared, the comparison is made on a per-column basis (e.g. an id selector will always be higher than any amount of class selectors, as ids have higher specificity than classes). In cases of equal specificity between multiple rules, the rules that comes last in the page's style sheet is deemed more specific and therefore applied to the element."
    },
    {
        "id": 472,
        "topic": "JavaScript",
        "question": "What is functional programming?",
        "answer": "Functional programming is a paradigm in which programs are built in a declarative manner using pure functions that avoid shared state and mutable data. Functions that always return the same value for the same input and don't produce side effects are the pillar of functional programming. Many programmers consider this to be the best approach to software development as it reduces bugs and cognitive load."
    },
    {
        "id": 473,
        "topic": "React",
        "question": "What are higher-order components?",
        "answer": "A higher-order component (HOC) is a function that takes a component as an argument and returns a new component. It is a pattern that is derived from React\u2019s compositional nature. Higher-order components are like **pure components** because they accept any dynamically provided child component, but they won\u2019t modify or copy any behavior from their input components.\n\n```js\nconst EnhancedComponent = higherOrderComponent(WrappedComponent)\n```"
    },
    {
        "id": 474,
        "topic": "React",
        "question": "What is context?",
        "answer": "Context provides a way to pass data through the component tree without having to pass props down manually at every level. For example, authenticated user, locale preference, UI theme need to be accessed in the application by many components.\n\n```js\nconst { Provider, Consumer } = React.createContext(defaultValue)\n```"
    },
    {
        "id": 475,
        "topic": "JavaScript",
        "question": "Describe the different ways to create an object. When should certain ways be preferred over others?",
        "answer": "##### Object literal\n\nOften used to store one occurrence of data.\n\n```js\nconst person = {\n  name: \"John\",\n  age: 50,\n  birthday() {\n    this.age++\n  }\n}\nperson.birthday() // person.age === 51\n```\n\n##### Constructor\n\nOften used when you need to create multiple instances of an object, each with their own data that other instances of the class cannot affect. The `new` operator must be used before invoking the constructor or the global object will be mutated.\n\n```js\nfunction Person(name, age) {\n  this.name = name\n  this.age = age\n}\nPerson.prototype.birthday = function() {\n  this.age++\n}\nconst person1 = new Person(\"John\", 50)\nconst person2 = new Person(\"Sally\", 20)\nperson1.birthday() // person1.age === 51\nperson2.birthday() // person2.age === 21\n```\n\n##### Factory function\n\nCreates a new object similar to a constructor, but can store private data using a closure. There is also no need to use `new` before invoking the function or the `this` keyword. Factory functions usually discard the idea of prototypes and keep all properties and methods as own properties of the object.\n\n```js\nconst createPerson = (name, age) => {\n  const birthday = () => person.age++\n  const person = { name, age, birthday }\n  return person\n}\nconst person = createPerson(\"John\", 50)\nperson.birthday() // person.age === 51\n```\n\n##### `Object.create()`\n\nSets the prototype of the newly created object.\n\n```js\nconst personProto = {\n  birthday() {\n    this.age++\n  }\n}\nconst person = Object.create(personProto)\nperson.age = 50\nperson.birthday() // person.age === 51\n```\n\nA second argument can also be supplied to `Object.create()` which acts as a descriptor for the new properties to be defined.\n\n```js\nObject.create(personProto, {\n  age: {\n    value: 50,\n    writable: true,\n    enumerable: true\n  }\n})\n```"
    },
    {
        "id": 476,
        "topic": "CSS",
        "question": "What is CSS BEM?",
        "answer": "The BEM methodology is a naming convention for CSS classes in order to keep CSS more maintainable by defining namespaces to solve scoping issues. BEM stands for Block Element Modifier which is an explanation for its structure. A Block is a standalone component that is reusable across projects and acts as a \"namespace\" for sub components (Elements). Modifiers are used as flags when a Block or Element is in a certain state or is different in structure or style.\n\n```css\n/* block component */\n.block {\n}\n\n/* element */\n.block__element {\n}\n\n/* modifier */\n.block__element--modifier {\n}\n```\n\nHere is an example with the class names on markup:\n\n```html\n<nav class=\"navbar\">\n  <a href=\"/\" class=\"navbar__link navbar__link--active\"></a>\n  <a href=\"/\" class=\"navbar__link\"></a>\n  <a href=\"/\" class=\"navbar__link\"></a>\n</nav>\n```\n\nIn this case, `navbar` is the Block, `navbar__link` is an Element that makes no sense outside of the `navbar` component, and `navbar__link--active` is a Modifier that indicates a different state for the `navbar__link` Element.\n\nSince Modifiers are verbose, many opt to use `is-*` flags instead as modifiers.\n\n```html\n<a href=\"/\" class=\"navbar__link is-active\"></a>\n```\n\nThese must be chained to the Element and never alone however, or there will be scope issues.\n\n```css\n.navbar__link.is-active {\n}\n```"
    },
    {
        "id": 477,
        "topic": "JavaScript",
        "question": "What is a MIME type and what is it used for?",
        "answer": "`MIME` is an acronym for `Multi-purpose Internet Mail Extensions`. It is used as a standard way of classifying file types over the Internet."
    },
    {
        "id": 478,
        "topic": "JavaScript",
        "question": "Create a standalone function `bind` that is functionally equivalent to the method `Function.prototype.bind`.\n\n```js\nfunction example() {\n  console.log(this)\n}\nconst boundExample = bind(example, { a: true })\nboundExample.call({ b: true }) // logs { a: true }\n```",
        "answer": "Return a function that accepts an arbitrary number of arguments by gathering them with the rest `...` operator. From that function, return the result of calling the `fn` with `Function.prototype.apply` to apply the context and the array of arguments to the function.\n\n```js\nconst bind = (fn, context) => (...args) => fn.apply(context, args)\n```"
    },
    {
        "id": 479,
        "topic": "CSS",
        "question": "Using flexbox, create a 3-column layout where each column takes up a `col-{n} / 12` ratio of the container.\n\n```html\n<div class=\"row\">\n  <div class=\"col-2\"></div>\n  <div class=\"col-7\"></div>\n  <div class=\"col-3\"></div>\n</div>\n```",
        "answer": "Set the `.row` parent to `display: flex;` and use the `flex` shorthand property to give the column classes a `flex-grow` value that corresponds to its ratio value.\n\n```css\n.row {\n  display: flex;\n}\n\n.col-2 {\n  flex: 2;\n}\n\n.col-7 {\n  flex: 7;\n}\n\n.col-3 {\n  flex: 3;\n}\n```"
    },
    {
        "id": 480,
        "topic": "React",
        "question": "What are refs in React? When should they be used?",
        "answer": "Refs provide a way to access DOM nodes or React elements created in the render method. Refs should be used sparringly, but there are some good use cases for refs, such as:\n\n* Managing focus, text selection, or media playback.\n* Triggering imperative animations.\n* Integrating with third-party DOM libraries.\n\nRefs are created using `React.createRef()` method and attached to React elements via the `ref` attribute. In order to use refs throughout the component, assign the `ref` to the instance property within the constructor:\n\n```js\nclass MyComponent extends React.Component {\n  constructor(props) {\n    super(props)\n    this.myRef = React.createRef()\n  }\n\n  render() {\n    return <div ref={this.myRef} />\n  }\n}\n```\n\nRefs can also be used in functional components with the help of closures."
    },
    {
        "id": 481,
        "topic": "HTML",
        "question": "What are some differences that XHTML has compared to HTML?",
        "answer": "Some of the key differences are:\n\n* An XHTML element must have an XHTML `<DOCTYPE>`\n* Attributes values must be enclosed in quotes\n* Attribute minimization is forbidden (e.g. one has to use `checked=\"checked\"` instead of `checked`)\n* Elements must always be properly nested\n* Elements must always be closed\n* Special characters must be escaped"
    },
    {
        "id": 482,
        "topic": "HTML",
        "question": "What is the purpose of the `alt` attribute on images?",
        "answer": "The `alt` attribute provides alternative information for an image if a user cannot view it. The `alt` attribute should be used to describe any images except those which only serve a decorative purpose, in which case it should be left empty."
    },
    {
        "id": 483,
        "topic": "React",
        "question": "What are inline conditional expressions?",
        "answer": "Since a JSX element tree is one large expression, you cannot embed statements inside. Conditional expressions act as a replacement for statements to use inside the tree.\n\nFor example, this won't work:\n\n<!-- prettier-ignore -->\n```js\nfunction App({ messages, isVisible }) {\n  return (\n    <div>\n      if (messages.length > 0) {\n        <h2>You have {messages.length} unread messages.</h2>\n      } else {\n        <h2>You have no unread messages.</h2>\n      }\n      if (isVisible) {\n        <p>I am visible.</p>\n      }\n    </div>\n  )\n}\n```\n\nLogical AND `&&` and the ternary `? :` operator replace the `if`/`else` statements.\n\n```js\nfunction App({ messages, isVisible }) {\n  return (\n    <div>\n      {messages.length > 0 ? (\n        <h2>You have {messages.length} unread messages.</h2>\n      ) : (\n        <h2>You have no unread messages.</h2>\n      )}\n      {isVisible && <p>I am visible.</p>}\n    </div>\n  )\n}\n```"
    },
    {
        "id": 484,
        "topic": "JavaScript",
        "question": "What is a closure? Can you give a useful example of one?",
        "answer": "A closure is a function defined inside another function and has access to its lexical scope even when it is executing outside its lexical scope. The closure has access to variables in three scopes:\n\n* Variables declared in its own scope\n* Variables declared in the scope of the parent function\n* Variables declared in the global scope\n\nIn JavaScript, all functions are closures because they have access to the outer scope, but most functions don't utilise the usefulness of closures: the persistence of state. Closures are also sometimes called stateful functions because of this.\n\nIn addition, closures are the only way to store private data that can't be accessed from the outside in JavaScript. They are the key to the UMD (Universal Module Definition) pattern, which is frequently used in libraries that only expose a public API but keep the implementation details private, preventing name collisions with other libraries or the user's own code."
    },
    {
        "id": 485,
        "topic": "React",
        "question": "What are fragments?",
        "answer": "Fragments allow a React component to return multiple elements without a wrapper, by grouping the children without adding extra elements to the DOM. Fragments offer better performance, lower memory usage, a cleaner DOM and can help in dealing with certain CSS mechanisms (e.g. tables, Flexbox and Grid).\n\n```js\nrender() {\n  return (\n    <React.Fragment>\n      <ChildA />\n      <ChildB />\n      <ChildC />\n    </React.Fragment>\n  );\n}\n\n// Short syntax supported by Babel 7\nrender() {\n  return (\n    <>\n      <ChildA />\n      <ChildB />\n      <ChildC />\n    </>\n  );\n}\n```"
    },
    {
        "id": 486,
        "topic": "JavaScript",
        "question": "Does JavaScript pass by value or by reference?",
        "answer": "JavaScript always passes by value. However, with objects, the value is a reference to the object."
    },
    {
        "id": 487,
        "topic": "CSS",
        "question": "What is the difference between '+' and '~' sibling selectors?.",
        "answer": "The General Sibling Selector `~` selects all elements that are siblings of a specified element.\n\nThe following example selects all `<p>` elements that are siblings of `<div>` elements:\n\n```css\ndiv ~ p {\n  background-color: blue;\n}\n```\n\nThe Adjacent Sibling Selector `+` selects all elements that are the adjacent siblings of a specified element.\n\nThe following example will select all `<p>` elements that are placed immediately after `<div>` elements:\n\n```css\ndiv + p {\n  background-color: red;\n}\n```"
    },
    {
        "id": 488,
        "topic": "JavaScript",
        "question": "What is Big O Notation?",
        "answer": "Big O notation is used in Computer Science to describe the time complexity of an algorithm. The best algorithms will execute the fastest and have the simplest complexity.\n\nAlgorithms don't always perform the same and may vary based on the data they are supplied. While in some cases they will execute quickly, in other cases they will execute slowly, even with the same number of elements to deal with.\n\nIn these examples, the base time is 1 element = `1ms`.\n\n##### O(1)\n\n```js\narr[arr.length - 1]\n```\n\n* 1000 elements = `1ms`\n\nConstant time complexity. No matter how many elements the array has, it will theoretically take (excluding real-world variation) the same amount of time to execute.\n\n##### O(N)\n\n```js\narr.filter(fn)\n```\n\n* 1000 elements = `1000ms`\n\nLinear time complexity. The execution time will increase linearly with the number of elements the array has. If the array has 1000 elements and the function takes 1ms to execute, 7000 elements will take 7ms to execute. This is because the function must iterate through all elements of the array before returning a result.\n\n##### O([1, N])\n\n```js\narr.some(fn)\n```\n\n* 1000 elements = `1ms <= x <= 1000ms`\n\nThe execution time varies depending on the data supplied to the function, it may return very early or very late. The best case here is O(1) and the worst case is O(N).\n\n##### O(NlogN)\n\n```js\narr.sort(fn)\n```\n\n* 1000 elements ~= `10000ms`\n\nBrowsers usually implement the quicksort algorithm for the `sort()` method and the average time complexity of quicksort is O(NlgN). This is very efficient for large collections.\n\n##### O(N^2)\n\n```js\nfor (let i = 0; i < arr.length; i++) {\n  for (let j = 0; j < arr.length; j++) {\n    // ...\n  }\n}\n```\n\n* 1000 elements = `1000000ms`\n\nThe execution time rises quadratically with the number of elements. Usually the result of nesting loops.\n\n##### O(N!)\n\n```js\nconst permutations = arr => {\n  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr\n  return arr.reduce(\n    (acc, item, i) =>\n      acc.concat(\n        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [\n          item,\n          ...val\n        ])\n      ),\n    []\n  )\n}\n```\n\n* 1000 elements = `Infinity` (practically) ms\n\nThe execution time rises extremely fast with even just 1 addition to the array."
    },
    {
        "id": 489,
        "topic": "HTML",
        "question": "What is the DOM?",
        "answer": "The DOM (Document Object Model) is a cross-platform API that treats HTML and XML documents as a tree structure consisting of nodes. These nodes (such as elements and text nodes) are objects that can be programmatically manipulated and any visible changes made to them are reflected live in the document. In a browser, this API is available to JavaScript where DOM nodes can be manipulated to change their styles, contents, placement in the document, or interacted with through event listeners."
    },
    {
        "id": 490,
        "topic": "Node",
        "question": "What is REST?",
        "answer": "REST (REpresentational State Transfer) is a software design pattern for network architecture. A RESTful web application exposes data in the form of information about its resources.\n\nGenerally, this concept is used in web applications to manage state. With most applications, there is a common theme of reading, creating, updating, and destroying data. Data is modularized into separate tables like `posts`, `users`, `comments`, and a RESTful API exposes access to this data with:\n\n* An identifier for the resource. This is known as the endpoint or URL for the resource.\n* The operation the server should perform on that resource in the form of an HTTP method or verb. The common HTTP methods are GET, POST, PUT, and DELETE.\n\nHere is an example of the URL and HTTP method with a `posts` resource:\n\n* Reading: `/posts/` => GET\n* Creating: `/posts/new` => POST\n* Updating: `/posts/:id` => PUT\n* Destroying: `/posts/:id` => DELETE"
    },
    {
        "id": 491,
        "topic": "JavaScript",
        "question": "What is the difference between synchronous and asynchronous code in JavaScript?",
        "answer": "Synchronous means each operation must wait for the previous one to complete.\n\nAsynchronous means an operation can occur while another operation is still being processed.\n\nIn JavaScript, all code is synchronous due to the single-threaded nature of it. However, asynchronous operations not part of the program (such as `XMLHttpRequest` or `setTimeout`) are processed outside of the main thread because they are controlled by native code (browser APIs), but callbacks part of the program will still be executed synchronously."
    },
    {
        "id": 492,
        "topic": "Security",
        "question": "What is a cross-site scripting attack (XSS) and how do you prevent it?",
        "answer": "XSS refers to client-side code injection where the attacker injects malicious scripts into a legitimate website or web application. This is often achieved when the application does not validate user input and freely injects dynamic HTML content.\n\nFor example, a comment system will be at risk if it does not validate or escape user input. If the comment contains unescaped HTML, the comment can inject a `<script>` tag into the website that other users will execute against their knowledge.\n\n* The malicious script has access to cookies which are often used to store session tokens. If an attacker can obtain a user\u2019s session cookie, they can impersonate the user.\n* The script can arbitrarily manipulate the DOM of the page the script is executing in, allowing the attacker to insert pieces of content that appear to be a real part of the website.\n* The script can use AJAX to send HTTP requests with arbitrary content to arbitrary destinations."
    },
    {
        "id": 493,
        "topic": "HTML",
        "question": "Where and why is the `rel=\"noopener\"` attribute used?",
        "answer": "The `rel=\"noopener\"` is an attribute used in `<a>` elements (hyperlinks). It prevents pages from having a `window.opener` property, which would otherwise point to the page from where the link was opened and would allow the page opened from the hyperlink to manipulate the page where the hyperlink is."
    },
    {
        "id": 494,
        "topic": "JavaScript",
        "question": "What is CORS?",
        "answer": "Cross-Origin Resource Sharing or CORS is a mechanism that uses additional HTTP headers to grant a browser permission to access resources from a server at an origin different from the website origin.\n\nAn example of a cross-origin request is a web application served from `http://mydomain.com` that uses AJAX to make a request for `http://yourdomain.com`.\n\nFor security reasons, browsers restrict cross-origin HTTP requests initiated by JavaScript. `XMLHttpRequest` and `fetch` follow the same-origin policy, meaning a web application using those APIs can only request HTTP resources from the same origin the application was accessed, unless the response from the other origin includes the correct CORS headers."
    },
    {
        "id": 495,
        "topic": "React",
        "question": "What are portals in React?",
        "answer": "Portal are the recommended way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.\n\n```js\nReactDOM.createPortal(child, container)\n```\n\nThe first argument (`child`) is any renderable React child, such as an element, string, or fragment. The second argument (`container`) is a DOM element."
    },
    {
        "id": 496,
        "topic": "HTML",
        "question": "Can a web page contain multiple `<header>` elements? What about `<footer>` elements?",
        "answer": "Yes to both. The W3 documents state that the tags represent the header(`<header>`) and footer(`<footer>`) areas of their nearest ancestor \"section\". So not only can the page `<body>` contain a header and a footer, but so can every `<article>` and `<section>` element."
    },
    {
        "id": 497,
        "topic": "CSS",
        "question": "Describe the layout of the CSS Box Model and briefly describe each component.",
        "answer": "<!-- Your answer goes here. -->\n\n`Content`: The inner-most part of the box filled with content, such as text, an image, or video player. It has the dimensions `content-box width` and `content-box height`.\n\n`Padding`: The transparent area surrounding the content. It has dimensions `padding-box width` and `padding-box height`.\n\n`Border`: The area surrounding the padding (if any) and content. It has dimensions `border-box width` and `border-box height`.\n\n_Margin_: The transparent outer-most layer that surrounds the border. It separates the element from other elements in the DOM. It has dimensions `margin-box width` and `margin-box height`.\n\n![alt text](https://www.washington.edu/accesscomputing/webd2/student/unit3/images/boxmodel.gif)"
    },
    {
        "id": 498,
        "topic": "Accessibility",
        "question": "What is ARIA and when should you use it?",
        "answer": "ARIA stands for \"Accessible Rich Internet Applications\", and is a technical specification created by the World Wide Web Consortium (W3C). Better known as WAI-ARIA, it provides additional HTML attributes in the development of web applications to offer people who use assistive technologies (AT) a more robust and interoperable experience with dynamic components. By providing the component's role, name, and state, AT users can better understand how to interact with the component. WAI-ARIA should only be used when an HTML element equivalent is not available or lacks full browser or AT support. WAI-ARIA's semantic markup coupled with JavaScript works to provide an understandable and interactive experience for people who use AT.\n\nAn example using ARIA:\n\n```\n<div \n  role=\"combobox\"\n  aria-expanded=\"false\"\n  aria-owns=\"ex1-grid\"\n  aria-haspopup=\"grid\"\n  id=\"ex1-combobox\">\n  ...\n</div>\n```\nCredit: W3C's [ARIA 1.1 Combobox with Grid Popup Example](https://w3c.github.io/aria-practices/examples/combobox/aria1.1pattern/grid-combo.html)"
    },
    {
        "id": 499,
        "topic": "JavaScript",
        "question": "What does `'use strict'` do and what are some of the key benefits to using it?",
        "answer": "Including `'use strict'` at the beginning of your JavaScript source file enables strict mode, which enforces more strict parsing and error handling of JavaScript code. It is considered a good practice and offers a lot of benefits, such as:\n\n* Easier debugging due to eliminating silent errors.\n* Disallows variable redefinition.\n* Prevents accidental global variables.\n* Oftentimes provides increased performance over identical code that is not running in strict mode.\n* Simplifies `eval()` and `arguments`.\n* Helps make JavaScript more secure."
    },
    {
        "id": 500,
        "topic": "React",
        "question": "What does lifting state up in React mean?",
        "answer": "When several components need to share the same data, then it is recommended to lift the shared state up to their closest common ancestor. For example, if two child components share the same data, it is recommended to move the shared state to parent instead of maintaining the local state in both child components."
    },
    {
        "id": 501,
        "topic": "Accessibility",
        "question": "What are landmark roles and how can they be useful?",
        "answer": "Landmark roles is a way to identify different sections of a page like the main content or a navigation region. The Landmarks helps assistive technology users to navigate a page, allowing them skip over areas of it.\n\nFor example,\n```html\n<div id=\"header\" role=\"banner\">Header of the Page</div>\n<div id=\"content\" role=\"main\">Main Content Goes Here</div>\n```"
    },
    {
        "id": 502,
        "topic": "React",
        "question": "What is a stateless component?",
        "answer": "A stateless component is a component whose behavior does not depend on its state. Stateless components can be either functional or class components. Stateless functional components are easier to maintain and test since they are guaranteed to produce the same output given the same props. Stateless functional components should be preferred when lifecycle hooks don't need to be used."
    },
    {
        "id": 503,
        "topic": "JavaScript",
        "question": "What is the difference between the equality operators `==` and `===`?",
        "answer": "Triple equals (`===`) checks for strict equality, which means both the type and value must be the same. Double equals (`==`) on the other hand first performs type coercion so that both operands are of the same type and then applies strict comparison."
    },
    {
        "id": 504,
        "topic": "React",
        "question": "How do you pass an argument to an event handler or callback?",
        "answer": "You can use an arrow function to wrap around an event handler and pass arguments, which is equivalent to calling `bind`:\n\n```js\n<button onClick={() => this.handleClick(id)} />\n<button onClick={this.handleClick.bind(this, id)} />\n```"
    },
    {
        "id": 505,
        "topic": "JavaScript",
        "question": "Explain the difference between a static method and an instance method.",
        "answer": "Static methods belong to a class and don't act on instances, while instance methods belong to the class prototype which is inherited by all instances of the class and acts on them.\n\n```js\nArray.isArray // static method of Array\nArray.prototype.push // instance method of Array\n```\n\nIn this case, the `Array.isArray` method does not make sense as an instance method of arrays because we already know the value is an array when working with it.\n\nInstance methods could technically work as static methods, but provide terser syntax:\n\n```js\nconst arr = [1, 2, 3]\narr.push(4)\nArray.push(arr, 4)\n```"
    },
    {
        "id": 506,
        "topic": "React",
        "question": "How to apply prop validation in React?",
        "answer": "When the application is running in development mode, React will automatically check for all props that we set on components to make sure they are the correct data type. For incorrect data types, it will generate warning messages in the console for development mode. They are stripped in production mode due to their performance impact. Required props are defined with `isRequired`.\n\nFor example, we define `propTypes` for component as below:\n\n```js\nimport PropTypes from \"prop-types\"\n\nclass User extends React.Component {\n  static propTypes = {\n    name: PropTypes.string.isRequired,\n    age: PropTypes.number.isRequired\n  }\n\n  render() {\n    return (\n      <h1>Welcome, {this.props.name}</h1>\n      <h2>Age, {this.props.age}\n    )\n  }\n}\n```"
    },
    {
        "id": 507,
        "topic": "JavaScript",
        "question": "What is the only value not equal to itself in JavaScript?",
        "answer": "`NaN` (Not-a-Number) is the only value not equal to itself when comparing with any of the comparison operators. `NaN` is often the result of meaningless math computations, so two `NaN` values make no sense to be considered equal."
    },
    {
        "id": 508,
        "topic": "JavaScript",
        "question": "What is event delegation and why is it useful? Can you show an example of how to use it?",
        "answer": "Event delegation is a technique of delegating events to a single common ancestor. Due to event bubbling, events \"bubble\" up the DOM tree by executing any handlers progressively on each ancestor element up to the root that may be listening to it.\n\nDOM events provide useful information about the element that initiated the event via `Event.target`. This allows the parent element to handle behavior as though the target element was listening to the event, rather than all children of the parent or the parent itself.\n\nThis provides two main benefits:\n\n* It increases performance and reduces memory consumption by only needing to register a single event listener to handle potentially thousands of elements.\n* If elements are dynamically added to the parent, there is no need to register new event listeners for them.\n\nInstead of:\n\n```js\ndocument.querySelectorAll(\"button\").forEach(button => {\n  button.addEventListener(\"click\", handleButtonClick)\n})\n```\n\nEvent delegation involves using a condition to ensure the child target matches our desired element:\n\n```js\ndocument.addEventListener(\"click\", e => {\n  if (e.target.closest(\"button\")) {\n    handleButtonClick()\n  }\n})\n```"
    },
    {
        "id": 509,
        "topic": "CSS",
        "question": "What is the difference between `em` and `rem` units?",
        "answer": "Both `em` and `rem` units are based on the `font-size` CSS property. The only difference is where they inherit their values from.\n\n* `em` units inherit their value from the `font-size` of the parent element\n* `rem` units inherit their value from the `font-size` of the root element (`html`)\n\nIn most browsers, the `font-size` of the root element is set to `16px` by default."
    },
    {
        "id": 510,
        "topic": "React",
        "question": "What is a stateful component in React?",
        "answer": "A stateful component is a component whose behavior depends on its state. This means that two separate instances of the component if given the same props will not necessarily render the same output, unlike pure function components.\n\n```js\n// Stateful class component\nclass App extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { count: 0 }\n  }\n  render() {\n    // ...\n  }\n}\n\n// Stateful function component\nfunction App() {\n  const [count, setCount] = useState(0)\n  return // ...\n}\n```"
    },
    {
        "id": 511,
        "topic": "JavaScript",
        "question": "What is a virtual DOM and why is it used in libraries/frameworks?",
        "answer": "The virtual DOM (VDOM) is a representation of the real DOM in the form of plain JavaScript objects. These objects have properties to describe the real DOM nodes they represent: the node name, its attributes, and child nodes.\n\n```html\n<div class=\"counter\">\n  <h1>0</h1>\n  <button>-</button>\n  <button>+</button>\n</div>\n```\n\nThe above markup's virtual DOM representation might look like this:\n\n```js\n{\n  nodeName: \"div\",\n  attributes: { class: \"counter\" },\n  children: [\n    {\n      nodeName: \"h1\",\n      attributes: {},\n      children: [0]\n    },\n    {\n      nodeName: \"button\",\n      attributes: {},\n      children: [\"-\"]\n    },\n    {\n      nodeName: \"button\",\n      attributes: {},\n      children: [\"+\"]\n    }\n  ]\n}\n```\n\nThe library/framework uses the virtual DOM as a means to improve performance. When the state of an application changes, the real DOM needs to be updated to reflect it. However, changing real DOM nodes is costly compared to recalculating the virtual DOM. The previous virtual DOM can be compared to the new virtual DOM very quickly in comparison.\n\nOnce the changes between the old VDOM and new VDOM have been calculated by the diffing engine of the framework, the real DOM can be patched efficiently in the least time possible to match the new state of the application."
    },
    {
        "id": 512,
        "topic": "JavaScript",
        "question": "Create a function `batches` that returns the maximum number of whole batches that can be cooked from a recipe.\n\n```js\n/**\nIt accepts two objects as arguments: the first object is the recipe\nfor the food, while the second object is the available ingredients.\nEach ingredient's value is a number representing how many units there are.\n\n`batches(recipe, available)`\n*/\n\n// 0 batches can be made\nbatches(\n  { milk: 100, butter: 50, flour: 5 },\n  { milk: 132, butter: 48, flour: 51 }\n)\nbatches(\n  { milk: 100, flour: 4, sugar: 10, butter: 5 },\n  { milk: 1288, flour: 9, sugar: 95 }\n)\n\n// 1 batch can be made\nbatches(\n  { milk: 100, butter: 50, cheese: 10 },\n  { milk: 198, butter: 52, cheese: 10 }\n)\n\n// 2 batches can be made\nbatches(\n  { milk: 2, sugar: 40, butter: 20 },\n  { milk: 5, sugar: 120, butter: 500 }\n)\n```",
        "answer": "We must have all ingredients of the recipe available, and in quantities that are more than or equal to the number of units required. If just one of the ingredients is not available or lower than needed, we cannot make a single batch.\n\nUse `Object.keys()` to return the ingredients of the recipe as an array, then use `Array.prototype.map()` to map each ingredient to the ratio of available units to the amount required by the recipe. If one of the ingredients required by the recipe is not available at all, the ratio will evaluate to `NaN`, so the logical OR operator can be used to fallback to `0` in this case.\n\nUse the spread `...` operator to feed the array of all the ingredient ratios into `Math.min()` to determine the lowest ratio. Passing this entire result into `Math.floor()` rounds down to return the maximum number of whole batches.\n\n```js\nconst batches = (recipe, available) =>\n  Math.floor(\n    Math.min(...Object.keys(recipe).map(k => available[k] / recipe[k] || 0))\n  )\n```"
    },
    {
        "id": 513,
        "topic": "JavaScript",
        "question": "What is the difference between lexical scoping and dynamic scoping?",
        "answer": "Lexical scoping refers to when the location of a function's definition determines which variables you have access to. On the other hand, dynamic scoping uses the location of the function's invocation to determine which variables are available."
    },
    {
        "id": 514,
        "topic": "JavaScript",
        "question": "In which states can a Promise be?",
        "answer": "A `Promise` is in one of these states:\n\n* pending: initial state, neither fulfilled nor rejected.\n* fulfilled: meaning that the operation completed successfully.\n* rejected: meaning that the operation failed.\n\nA pending promise can either be fulfilled with a value, or rejected with a reason (error).\nWhen either of these options happens, the associated handlers queued up by a promise's then method are called."
    },
    {
        "id": 515,
        "topic": "React",
        "question": "Which is the preferred option between callback refs and findDOMNode()?",
        "answer": "Callback refs are preferred over the `findDOMNode()` API, due to the fact that `findDOMNode()` prevents certain improvements in React in the future.\n\n```js\n// Legacy approach using findDOMNode()\nclass MyComponent extends Component {\n  componentDidMount() {\n    findDOMNode(this).scrollIntoView()\n  }\n\n  render() {\n    return <div />\n  }\n}\n\n// Recommended approach using callback refs\nclass MyComponent extends Component {\n  componentDidMount() {\n    this.node.scrollIntoView()\n  }\n\n  render() {\n    return <div ref={node => (this.node = node)} />\n  }\n}\n```"
    },
    {
        "id": 516,
        "topic": "JavaScript",
        "question": "What is the difference between a parameter and an argument?",
        "answer": "Parameters are the variable names of the function definition, while arguments are the values given to a function when it is invoked.\n\n```js\nfunction myFunction(parameter1, parameter2) {\n  console.log(arguments[0]) // \"argument1\"\n}\nmyFunction(\"argument1\", \"argument2\")\n```"
    },
    {
        "id": 517,
        "topic": "JavaScript",
        "question": "What does the following function return?\n\n```js\nfunction greet() {\n  return\n  {\n    message: \"hello\"\n  }\n}\n```",
        "answer": "Because of JavaScript's automatic semicolon insertion (ASI), the compiler places a semicolon after `return` keyword and therefore it returns `undefined` without an error being thrown."
    },
    {
        "id": 518,
        "topic": "React",
        "question": "What is the `children` prop?",
        "answer": "`children` is part of the props object passed to components that allows components to be passed as data to other components, providing the ability to compose components cleanly. There are a number of methods available in the React API to work with this prop, such as `React.Children.map`, `React.Children.forEach`, `React.Children.count`, `React.Children.only` and `React.Children.toArray`. A simple usage example of the children prop is as follows:\n\n```js\nfunction GenericBox({ children }) {\n  return <div className=\"container\">{children}</div>\n}\n\nfunction App() {\n  return (\n    <GenericBox>\n      <span>Hello</span> <span>World</span>\n    </GenericBox>\n  )\n}\n```"
    },
    {
        "id": 519,
        "topic": "JavaScript",
        "question": "What are the differences between `var`, `let`, `const` and no keyword statements?",
        "answer": "##### No keyword\n\nWhen no keyword exists before a variable assignment, it is either assigning a global variable if one does not exist, or reassigns an already declared variable. In non-strict mode, if the variable has not yet been declared, it will assign the variable as a property of the global object (`window` in browsers). In strict mode, it will throw an error to prevent unwanted global variables from being created.\n\n##### var\n\n`var` was the default statement to declare a variable until ES2015. It creates a function-scoped variable that can be reassigned and redeclared. However, due to its lack of block scoping, it can cause issues if the variable is being reused in a loop that contains an asynchronous callback because the variable will continue to exist outside of the block scope.\n\nBelow, by the time the the `setTimeout` callback executes, the loop has already finished and the `i` variable is `10`, so all ten callbacks reference the same variable available in the function scope.\n\n```js\nfor (var i = 0; i < 10; i++) {\n  setTimeout(() => {\n    // logs `10` ten times\n    console.log(i)\n  })\n}\n\n/* Solutions with `var` */\nfor (var i = 0; i < 10; i++) {\n  // Passed as an argument will use the value as-is in\n  // that point in time\n  setTimeout(console.log, 0, i)\n}\n\nfor (var i = 0; i < 10; i++) {\n  // Create a new function scope that will use the value\n  // as-is in that point in time\n  ;(i => {\n    setTimeout(() => {\n      console.log(i)\n    })\n  })(i)\n}\n```\n\n##### let\n\n`let` was introduced in ES2015 and is the new preferred way to declare variables that will be reassigned later. Trying to redeclare a variable again will throw an error. It is block-scoped so that using it in a loop will keep it scoped to the iteration.\n\n```js\nfor (let i = 0; i < 10; i++) {\n  setTimeout(() => {\n    // logs 0, 1, 2, 3, ...\n    console.log(i)\n  })\n}\n```\n\n##### const\n\n`const` was introduced in ES2015 and is the new preferred default way to declare all variables if they won't be reassigned later, even for objects that will be mutated (as long as the reference to the object does not change). It is block-scoped and cannot be reassigned.\n\n```js\nconst myObject = {}\nmyObject.prop = \"hello!\" // No error\nmyObject = \"hello\" // Error\n```"
    },
    {
        "id": 520,
        "topic": "JavaScript",
        "question": "How do you compare two objects in JavaScript?",
        "answer": "Even though two different objects can have the same properties with equal values, they are not considered equal when compared using `==` or `===`. This is because they are being compared by their reference (location in memory), unlike primitive values which are compared by value.\n\nIn order to test if two objects are equal in structure, a helper function is required. It will\niterate through the own properties of each object to test if they have the same values, including nested objects.\nOptionally, the prototypes of the objects may also be tested for equivalence by passing `true` as the 3rd argument.\n\nNote: this technique does not attempt to test equivalence of data structures other than\nplain objects, arrays, functions, dates and primitive values.\n\n```js\nfunction isDeepEqual(obj1, obj2, testPrototypes = false) {\n  if (obj1 === obj2) {\n    return true\n  }\n\n  if (typeof obj1 === \"function\" && typeof obj2 === \"function\") {\n    return obj1.toString() === obj2.toString()\n  }\n\n  if (obj1 instanceof Date && obj2 instanceof Date) {\n    return obj1.getTime() === obj2.getTime()\n  }\n\n  if (\n    Object.prototype.toString.call(obj1) !==\n      Object.prototype.toString.call(obj2) ||\n    typeof obj1 !== \"object\"\n  ) {\n    return false\n  }\n\n  const prototypesAreEqual = testPrototypes\n    ? isDeepEqual(\n        Object.getPrototypeOf(obj1),\n        Object.getPrototypeOf(obj2),\n        true\n      )\n    : true\n\n  const obj1Props = Object.getOwnPropertyNames(obj1)\n  const obj2Props = Object.getOwnPropertyNames(obj2)\n\n  return (\n    obj1Props.length === obj2Props.length &&\n    prototypesAreEqual &&\n    obj1Props.every(prop => isDeepEqual(obj1[prop], obj2[prop]))\n  )\n}\n```"
    },
    {
        "id": 521,
        "topic": "React",
        "question": "What are error boundaries in React?",
        "answer": "Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.\n\nClass components become error boundaries if they define either (or both) of the lifecycle methods `static getDerivedStateFromError()` or `componentDidCatch().`\n\n```js\nclass ErrorBoundary extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = { hasError: false }\n  }\n\n  // Use componentDidCatch to log the error\n  componentDidCatch(error, info) {\n    // You can also log the error to an error reporting service\n    logErrorToMyService(error, info)\n  }\n  \n  // use getDerivedStateFromError to update state\n  static getDerivedStateFromError(error) {\n    // Display fallback UI\n     return { hasError: true };\n  }\n\n\n  render() {\n    if (this.state.hasError) {\n      // You can render any custom fallback UI\n      return <h1>Something went wrong.</h1>\n    }\n    return this.props.children\n  }\n}\n```"
    },
    {
        "id": 522,
        "topic": "JavaScript",
        "question": "What is the difference between an expression and a statement in JavaScript?",
        "answer": "There are two main syntactic categories in JavaScript: expressions and statements. A third one is both together, referred to as an expression statement. They are roughly summarized as:\n\n* **Expression**: produces a value\n* **Statement**: performs an action\n* **Expression statement**: produces a value and performs an action\n\nA general rule of thumb:\n\n> If you can print it or assign it to a variable, it\u2019s an expression. If you can\u2019t, it\u2019s a statement.\n\n##### Statements\n\n```js\nlet x = 0\n\nfunction declaration() {}\n\nif (true) {\n}\n```\n\nStatements appear as instructions that do something but don't produce values.\n\n```js\n// Assign `x` to the absolute value of `y`.\nvar x\nif (y >= 0) {\n  x = y\n} else {\n  x = -y\n}\n```\n\nThe only expression in the above code is `y >= 0` which produces a value, either `true` or `false`. A value is not produced by other parts of the code.\n\n##### Expressions\n\nExpressions produce a value. They can be passed around to functions because the interpreter replaces them with the value they resolve to.\n\n```js\n5 + 5 // => 10\n\nlastCharacter(\"input\") // => \"t\"\n\ntrue === true // => true\n```\n\n##### Expression statements\n\nThere is an equivalent version of the set of statements used before as an expression using the conditional operator:\n\n```js\n// Assign `x` as the absolute value of `y`.\nvar x = y >= 0 ? y : -y\n```\n\nThis is both an expression and a statement, because we are declaring a variable `x` (statement) as an evaluation (expression)."
    },
    {
        "id": 523,
        "topic": "JavaScript",
        "question": "What does `0.1 + 0.2 === 0.3` evaluate to?",
        "answer": "It evaluates to `false` because JavaScript uses the IEEE 754 standard for Math and it makes use of 64-bit floating numbers. This causes precision errors when doing decimal calculations, in short, due to computers working in Base 2 while decimal is Base 10.\n\n```js\n0.1 + 0.2 // 0.30000000000000004\n```\n\nA solution to this problem would be to use a function that determines if two numbers are approximately equal by defining an error margin (epsilon) value that the difference between two values should be less than.\n\n```js\nconst approxEqual = (n1, n2, epsilon = 0.0001) => Math.abs(n1 - n2) < epsilon\napproxEqual(0.1 + 0.2, 0.3) // true\n```"
    },
    {
        "id": 524,
        "topic": "JavaScript",
        "question": "What is the `this` keyword and how does it work?",
        "answer": "The `this` keyword is an object that represents the context of an executing function. Regular functions can have their `this` value changed with the methods `call()`, `apply()` and `bind()`. Arrow functions implicitly bind `this` so that it refers to the context of its lexical environment, regardless of whether or not its context is set explicitly with `call()`.\n\nHere are some common examples of how `this` works:\n\n##### Object literals\n\n`this` refers to the object itself inside regular functions if the object precedes the invocation of the function.\n\nProperties set as `this` do not refer to the object.\n\n```js\nvar myObject = {\n  property: this,\n  regularFunction: function() {\n    return this\n  },\n  arrowFunction: () => {\n    return this\n  },\n  iife: (function() {\n    return this\n  })()\n}\nmyObject.regularFunction() // myObject\nmyObject[\"regularFunction\"]() // my Object\n\nmyObject.property // NOT myObject; lexical `this`\nmyObject.arrowFunction() // NOT myObject; lexical `this`\nmyObject.iife // NOT myObject; lexical `this`\nconst regularFunction = myObject.regularFunction\nregularFunction() // NOT myObject; lexical `this`\n```\n\n##### Event listeners\n\n`this` refers to the element listening to the event.\n\n```js\ndocument.body.addEventListener(\"click\", function() {\n  console.log(this) // document.body\n})\n```\n\n##### Constructors\n\n`this` refers to the newly created object.\n\n```js\nclass Example {\n  constructor() {\n    console.log(this) // myExample\n  }\n}\nconst myExample = new Example()\n```\n\n##### Manual\n\nWith `call()` and `apply()`, `this` refers to the object passed as the first argument.\n\n```js\nvar myFunction = function() {\n  return this\n}\nmyFunction.call({ customThis: true }) // { customThis: true }\n```\n\n##### Unwanted `this`\n\nBecause `this` can change depending on the scope, it can have unexpected values when using regular functions.\n\n```js\nvar obj = {\n  arr: [1, 2, 3],\n  doubleArr() {\n    return this.arr.map(function(value) {\n      // this is now this.arr\n      return this.double(value)\n    })\n  },\n  double() {\n    return value * 2\n  }\n}\nobj.doubleArr() // Uncaught TypeError: this.double is not a function\n```"
    },
    {
        "id": 525,
        "topic": "HTML",
        "question": "What are `defer` and `async` attributes on a `<script>` tag?",
        "answer": "If neither attribute is present, the script is downloaded and executed synchronously, and will halt parsing of the document until it has finished executing (default behavior). Scripts are downloaded and executed in the order\nthey are encountered.\n\nThe `defer` attribute downloads the script while the document is still parsing but waits until the document has finished parsing before executing it, equivalent to executing inside a `DOMContentLoaded` event listener. `defer` scripts will execute in order.\n\nThe `async` attribute downloads the script during parsing the document but will pause the parser to execute the script before it has fully finished parsing. `async` scripts will not necessarily execute in order.\n\nNote: both attributes must only be used if the script has a `src` attribute (i.e. not an inline script).\n\n```html\n<script src=\"myscript.js\"></script>\n<script src=\"myscript.js\" defer></script>\n<script src=\"myscript.js\" async></script>\n```"
    },
    {
        "id": 526,
        "topic": "React",
        "question": "Why does React use `className` instead of `class` like in HTML?",
        "answer": "React's philosophy in the beginning was to align with the browser DOM API rather than HTML, since that more closely represents how elements are created. Setting a `class` on an element meant using the `className` API:\n\n```js\nconst element = document.createElement(\"div\")\nelement.className = \"hello\"\n```\n\nAdditionally, before ES5, reserved words could not be used in objects:\n\n```js\nconst element = {\n  attributes: {\n    class: \"hello\"\n  }\n}\n```\n\nIn IE8, this will throw an error.\n\nIn modern environments, destructuring will throw an error if trying to assign to a variable:\n\n```js\nconst { class } = this.props // Error\nconst { className } = this.props // All good\nconst { class: className } = this.props // All good, but cumbersome!\n```\n\nHowever, `class` _can_ be used as a prop without problems, as seen in other libraries like Preact. React currently allows you to use `class`, but will throw a warning and convert it to `className` under the hood. There is currently an open thread (as of January 2019) discussing changing `className` to `class` to reduce confusion."
    },
    {
        "id": 527,
        "topic": "JavaScript",
        "question": "What is recursion and when is it useful?",
        "answer": "Recursion is the repeated application of a process. In JavaScript, recursion involves functions that call themselves repeatedly until they reach a base condition. The base condition breaks out of the recursion loop because otherwise the function would call itself indefinitely. Recursion is very useful when working with data structures that contain nesting where the number of levels deep is unknown.\n\nFor example, you may have a thread of comments returned from a database that exist in a flat array but need to be nested for display in the UI. Each comment is either a top-level comment (no parent) or is a reply to a parent comment. Comments can be a reply of a reply of a reply... we have no knowledge beforehand the number of levels deep a comment may be. This is where recursion can help.\n\n```js\nconst nest = (items, id = null, link = \"parent_id\") =>\n  items\n    .filter(item => item[link] === id)\n    .map(item => ({ ...item, children: nest(items, item.id) }))\n\nconst comments = [\n  { id: 1, parent_id: null, text: \"First reply to post.\" },\n  { id: 2, parent_id: 1, text: \"First reply to comment #1.\" },\n  { id: 3, parent_id: 1, text: \"Second reply to comment #1.\" },\n  { id: 4, parent_id: 3, text: \"First reply to comment #3.\" },\n  { id: 5, parent_id: 4, text: \"First reply to comment #4.\" },\n  { id: 6, parent_id: null, text: \"Second reply to post.\" }\n]\n\nnest(comments)\n/*\n[\n  { id: 1, parent_id: null, text: \"First reply to post.\", children: [...] },\n  { id: 6, parent_id: null, text: \"Second reply to post.\", children: [] }\n]\n*/\n```\n\nIn the above example, the base condition is met if `filter()` returns an empty array. The chained `map()` won't invoke the callback function which contains the recursive call, thereby breaking the loop."
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 100 mean?",
        "answer": "Continue",
        "id": 528
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 101 mean?",
        "answer": "Switching Protocols",
        "id": 529
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 200 mean?",
        "answer": "OK",
        "id": 530
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 201 mean?",
        "answer": "Created",
        "id": 531
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 202 mean?",
        "answer": "Accepted",
        "id": 532
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 203 mean?",
        "answer": "Non-Authoritative Information",
        "id": 533
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 204 mean?",
        "answer": "No Content",
        "id": 534
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 205 mean?",
        "answer": "Reset Content",
        "id": 535
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 206 mean?",
        "answer": "Partial Content",
        "id": 536
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 300 mean?",
        "answer": "Multiple Choices",
        "id": 537
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 301 mean?",
        "answer": "Moved Permanently",
        "id": 538
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 302 mean?",
        "answer": "Found",
        "id": 539
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 303 mean?",
        "answer": "See Other",
        "id": 540
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 304 mean?",
        "answer": "Not Modified",
        "id": 541
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 307 mean?",
        "answer": "Temporary Redirect",
        "id": 542
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 308 mean?",
        "answer": "Permanent Redirect",
        "id": 543
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 400 mean?",
        "answer": "Bad Request",
        "id": 544
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 401 mean?",
        "answer": "Unauthorized",
        "id": 545
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 402 mean?",
        "answer": "Payment Required",
        "id": 546
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 403 mean?",
        "answer": "Forbidden",
        "id": 547
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 404 mean?",
        "answer": "Not Found",
        "id": 548
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 405 mean?",
        "answer": "Method Not Allowed",
        "id": 549
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 406 mean?",
        "answer": "Not Acceptable",
        "id": 550
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 407 mean?",
        "answer": "Proxy Authentication Required",
        "id": 551
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 408 mean?",
        "answer": "Request Timeout",
        "id": 552
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 409 mean?",
        "answer": "Conflict",
        "id": 553
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 410 mean?",
        "answer": "Gone",
        "id": 554
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 411 mean?",
        "answer": "Length Required",
        "id": 555
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 412 mean?",
        "answer": "Precondition Failed",
        "id": 556
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 413 mean?",
        "answer": "Payload Too Large",
        "id": 557
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 414 mean?",
        "answer": "URI Too Long",
        "id": 558
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 415 mean?",
        "answer": "Unsupported Media Type",
        "id": 559
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 416 mean?",
        "answer": "Range Not Satisfiable",
        "id": 560
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 417 mean?",
        "answer": "Expectation Failed",
        "id": 561
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 418 mean?",
        "answer": "I'm a teapot",
        "id": 562
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 422 mean?",
        "answer": "Unprocessable Entity",
        "id": 563
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 429 mean?",
        "answer": "Too Many Requests",
        "id": 564
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 500 mean?",
        "answer": "Internal Server Error",
        "id": 565
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 501 mean?",
        "answer": "Not Implemented",
        "id": 566
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 502 mean?",
        "answer": "Bad Gateway",
        "id": 567
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 503 mean?",
        "answer": "Service Unavailable",
        "id": 568
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 504 mean?",
        "answer": "Gateway Timeout",
        "id": 569
    },
    {
        "topic": "Networking",
        "question": "What does HTTP Status Code 505 mean?",
        "answer": "HTTP Version Not Supported",
        "id": 570
    },
    {
        "topic": "Networking",
        "question": "What is the purpose of the HTTP Accept header?",
        "answer": "Informs the server about the types of data that can be sent back.",
        "id": 571
    },
    {
        "topic": "Networking",
        "question": "What is the purpose of the HTTP Authorization header?",
        "answer": "Contains the credentials to authenticate a user agent with a server.",
        "id": 572
    },
    {
        "topic": "Networking",
        "question": "What is the purpose of the HTTP Cache-Control header?",
        "answer": "Specifies directives for caching mechanisms in both requests and responses.",
        "id": 573
    },
    {
        "topic": "Networking",
        "question": "What is the purpose of the HTTP Content-Type header?",
        "answer": "Indicates the media type of the resource.",
        "id": 574
    },
    {
        "topic": "Networking",
        "question": "What is the purpose of the HTTP Cookie header?",
        "answer": "Contains stored HTTP cookies previously sent by the server with the Set-Cookie header.",
        "id": 575
    },
    {
        "topic": "Networking",
        "question": "What is the purpose of the HTTP Host header?",
        "answer": "Specifies the domain name of the server and (optionally) the TCP port number on which the server is listening.",
        "id": 576
    },
    {
        "topic": "Networking",
        "question": "What is the purpose of the HTTP Origin header?",
        "answer": "Indicates where a fetch originates from.",
        "id": 577
    },
    {
        "topic": "Networking",
        "question": "What is the purpose of the HTTP Referer header?",
        "answer": "Indicates the origin of the request.",
        "id": 578
    },
    {
        "topic": "Networking",
        "question": "What is the purpose of the HTTP User-Agent header?",
        "answer": "Contains a characteristic string that allows the network protocol peers to identify the application type, operating system, software vendor or software version of the requesting software user agent.",
        "id": 579
    },
    {
        "topic": "Networking",
        "question": "What is the purpose of the HTTP CORS header?",
        "answer": "Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.",
        "id": 580
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `abs()` do?",
        "answer": "Returns the absolute value of a number.",
        "id": 581
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `all()` do?",
        "answer": "Returns True if all elements of the iterable are true.",
        "id": 582
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `any()` do?",
        "answer": "Returns True if any element of the iterable is true.",
        "id": 583
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `bin()` do?",
        "answer": "Converts an integer to a binary string.",
        "id": 584
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `bool()` do?",
        "answer": "Converts a value to a Boolean.",
        "id": 585
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `callable()` do?",
        "answer": "Returns True if the object appears callable, False if not.",
        "id": 586
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `chr()` do?",
        "answer": "Converts an integer to a lowercase Unicode string.",
        "id": 587
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `classmethod()` do?",
        "answer": "Transforms a method into a class method.",
        "id": 588
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `compile()` do?",
        "answer": "Compiles the source into a code or AST object.",
        "id": 589
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `complex()` do?",
        "answer": "Creates a complex number.",
        "id": 590
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `delattr()` do?",
        "answer": "Deletes the named attribute from the given object.",
        "id": 591
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `dict()` do?",
        "answer": "Creates a new dictionary.",
        "id": 592
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `dir()` do?",
        "answer": "Returns a list of valid attributes of the object.",
        "id": 593
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `divmod()` do?",
        "answer": "Returns the quotient and remainder of dividing two numbers.",
        "id": 594
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `enumerate()` do?",
        "answer": "Returns an enumerate object.",
        "id": 595
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `eval()` do?",
        "answer": "Evaluates and executes an expression.",
        "id": 596
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `exec()` do?",
        "answer": "Supports dynamic execution of Python code.",
        "id": 597
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `filter()` do?",
        "answer": "Constructs an iterator from elements of an iterable for which a function returns true.",
        "id": 598
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `float()` do?",
        "answer": "Converts a string or number to a floating point number.",
        "id": 599
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `format()` do?",
        "answer": "Formats a specified value.",
        "id": 600
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `frozenset()` do?",
        "answer": "Returns a new frozenset object.",
        "id": 601
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `getattr()` do?",
        "answer": "Returns the value of the named attribute of an object.",
        "id": 602
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `globals()` do?",
        "answer": "Returns a dictionary representing the current global symbol table.",
        "id": 603
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `hasattr()` do?",
        "answer": "Returns True if the object has the given attribute.",
        "id": 604
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `hash()` do?",
        "answer": "Returns the hash value of the object.",
        "id": 605
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `help()` do?",
        "answer": "Invokes the built-in help system.",
        "id": 606
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `hex()` do?",
        "answer": "Converts an integer to a lowercase hexadecimal string.",
        "id": 607
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `id()` do?",
        "answer": "Returns the 'identity' of an object.",
        "id": 608
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `input()` do?",
        "answer": "Reads a line from input, converts it to a string.",
        "id": 609
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `int()` do?",
        "answer": "Converts a number or string to an integer.",
        "id": 610
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `isinstance()` do?",
        "answer": "Returns True if the object is an instance of the classinfo argument.",
        "id": 611
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `issubclass()` do?",
        "answer": "Returns True if class is a subclass of classinfo.",
        "id": 612
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `iter()` do?",
        "answer": "Returns an iterator object.",
        "id": 613
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `len()` do?",
        "answer": "Returns the length (the number of items) of an object.",
        "id": 614
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `list()` do?",
        "answer": "Creates a new list.",
        "id": 615
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `locals()` do?",
        "answer": "Returns a dictionary representing the current local symbol table.",
        "id": 616
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `map()` do?",
        "answer": "Returns an iterator that applies function to every item of iterable.",
        "id": 617
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `max()` do?",
        "answer": "Returns the largest item in an iterable or the largest of two or more arguments.",
        "id": 618
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `min()` do?",
        "answer": "Returns the smallest item in an iterable or the smallest of two or more arguments.",
        "id": 619
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `next()` do?",
        "answer": "Retrieves the next item from the iterator.",
        "id": 620
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `object()` do?",
        "answer": "Returns a new featureless object.",
        "id": 621
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `oct()` do?",
        "answer": "Converts an integer to an octal string.",
        "id": 622
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `open()` do?",
        "answer": "Opens a file and returns a corresponding file object.",
        "id": 623
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `ord()` do?",
        "answer": "Given a string representing one Unicode character, return an integer representing the Unicode code point of that character.",
        "id": 624
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `pow()` do?",
        "answer": "Returns base to the power exp.",
        "id": 625
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `print()` do?",
        "answer": "Prints the objects to the text stream file.",
        "id": 626
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `property()` do?",
        "answer": "Returns a property attribute.",
        "id": 627
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `range()` do?",
        "answer": "Generates an immutable sequence of numbers.",
        "id": 628
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `repr()` do?",
        "answer": "Returns a string containing a printable representation of an object.",
        "id": 629
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `reversed()` do?",
        "answer": "Returns a reverse iterator.",
        "id": 630
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `round()` do?",
        "answer": "Returns number rounded to ndigits precision after the decimal point.",
        "id": 631
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `set()` do?",
        "answer": "Returns a new set object.",
        "id": 632
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `setattr()` do?",
        "answer": "Sets the value of the named attribute of an object.",
        "id": 633
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `slice()` do?",
        "answer": "Returns a slice object representing the set of indices specified by range(start, stop, step).",
        "id": 634
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `sorted()` do?",
        "answer": "Returns a new sorted list from the items in iterable.",
        "id": 635
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `staticmethod()` do?",
        "answer": "Transforms a method into a static method.",
        "id": 636
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `str()` do?",
        "answer": "Returns a str version of object.",
        "id": 637
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `sum()` do?",
        "answer": "Sums start and the items of an iterable from left to right and returns the total.",
        "id": 638
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `super()` do?",
        "answer": "Returns a proxy object that delegates method calls to a parent or sibling class of type.",
        "id": 639
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `tuple()` do?",
        "answer": "Creates a new tuple.",
        "id": 640
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `type()` do?",
        "answer": "Returns the type of an object.",
        "id": 641
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `vars()` do?",
        "answer": "Returns a dictionary representing the current local symbol table.",
        "id": 642
    },
    {
        "topic": "Python / Backend",
        "question": "What does the Python built-in function `zip()` do?",
        "answer": "Yields tuples until an input is exhausted.",
        "id": 643
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `Array.push()` do?",
        "answer": "Adds one or more elements to the end of an array and returns the new length of the array.",
        "id": 644
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `Array.pop()` do?",
        "answer": "Removes the last element from an array and returns that element.",
        "id": 645
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `Array.shift()` do?",
        "answer": "Removes the first element from an array and returns that element.",
        "id": 646
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `Array.unshift()` do?",
        "answer": "Adds one or more elements to the front of an array and returns the new length of the array.",
        "id": 647
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `Array.concat()` do?",
        "answer": "Used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.",
        "id": 648
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `Array.join()` do?",
        "answer": "Joins all elements of an array (or an array-like object) into a string and returns this string.",
        "id": 649
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `Array.slice()` do?",
        "answer": "Returns a shallow copy of a portion of an array into a new array object selected from start to end.",
        "id": 650
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `Array.splice()` do?",
        "answer": "Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.",
        "id": 651
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `Array.indexOf()` do?",
        "answer": "Returns the first index at which a given element can be found in the array, or -1 if it is not present.",
        "id": 652
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `Array.lastIndexOf()` do?",
        "answer": "Returns the last index at which a given element can be found in the array, or -1 if it is not present.",
        "id": 653
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `Array.forEach()` do?",
        "answer": "Executes a provided function once for each array element.",
        "id": 654
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `Array.map()` do?",
        "answer": "Creates a new array populated with the results of calling a provided function on every element in the calling array.",
        "id": 655
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `Array.filter()` do?",
        "answer": "Creates a new array with all elements that pass the test implemented by the provided function.",
        "id": 656
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `Array.reduce()` do?",
        "answer": "Executes a reducer function on each element of the array, resulting in a single output value.",
        "id": 657
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `Array.reduceRight()` do?",
        "answer": "Applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.",
        "id": 658
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `Array.some()` do?",
        "answer": "Tests whether at least one element in the array passes the test implemented by the provided function.",
        "id": 659
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `Array.every()` do?",
        "answer": "Tests whether all elements in the array pass the test implemented by the provided function.",
        "id": 660
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `Array.find()` do?",
        "answer": "Returns the value of the first element in the provided array that satisfies the provided testing function.",
        "id": 661
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `Array.findIndex()` do?",
        "answer": "Returns the index of the first element in the array that satisfies the provided testing function.",
        "id": 662
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `Array.includes()` do?",
        "answer": "Determines whether an array includes a certain value among its entries, returning true or false as appropriate.",
        "id": 663
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `Array.sort()` do?",
        "answer": "Sorts the elements of an array in place and returns the sorted array.",
        "id": 664
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `Array.reverse()` do?",
        "answer": "Reverses an array in place.",
        "id": 665
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `Array.fill()` do?",
        "answer": "Changes all elements in an array to a static value, from a start index to an end index.",
        "id": 666
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `Array.copyWithin()` do?",
        "answer": "Shallow copies part of an array to another location in the same array and returns it.",
        "id": 667
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `Array.flat()` do?",
        "answer": "Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.",
        "id": 668
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `Array.flatMap()` do?",
        "answer": "Returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level.",
        "id": 669
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `String.charAt()` do?",
        "answer": "Returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.",
        "id": 670
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `String.charCodeAt()` do?",
        "answer": "Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.",
        "id": 671
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `String.concat()` do?",
        "answer": "Concatenates the string arguments to the calling string and returns a new string.",
        "id": 672
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `String.includes()` do?",
        "answer": "Determines whether one string may be found within another string, returning true or false as appropriate.",
        "id": 673
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `String.endsWith()` do?",
        "answer": "Determines whether a string ends with the characters of a specified string, returning true or false as appropriate.",
        "id": 674
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `String.indexOf()` do?",
        "answer": "Returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex.",
        "id": 675
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `String.lastIndexOf()` do?",
        "answer": "Returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex.",
        "id": 676
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `String.localeCompare()` do?",
        "answer": "Returns a number indicating whether a reference string comes before, or after, or is the same as the given string in sort order.",
        "id": 677
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `String.match()` do?",
        "answer": "Retrieves the result of matching a string against a regular expression.",
        "id": 678
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `String.matchAll()` do?",
        "answer": "Returns an iterator of all results matching a string against a regular expression, including capturing groups.",
        "id": 679
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `String.normalize()` do?",
        "answer": "Returns the Unicode Normalization Form of the string.",
        "id": 680
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `String.padEnd()` do?",
        "answer": "Pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.",
        "id": 681
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `String.padStart()` do?",
        "answer": "Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.",
        "id": 682
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `String.repeat()` do?",
        "answer": "Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.",
        "id": 683
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `String.replace()` do?",
        "answer": "Returns a new string with some or all matches of a pattern replaced by a replacement.",
        "id": 684
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `String.replaceAll()` do?",
        "answer": "Returns a new string with all matches of a pattern replaced by a replacement.",
        "id": 685
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `String.search()` do?",
        "answer": "Executes a search for a match between a regular expression and this String object.",
        "id": 686
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `String.slice()` do?",
        "answer": "Extracts a section of a string and returns it as a new string, without modifying the original string.",
        "id": 687
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `String.split()` do?",
        "answer": "Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.",
        "id": 688
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `String.startsWith()` do?",
        "answer": "Determines whether a string begins with the characters of a specified string, returning true or false as appropriate.",
        "id": 689
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `String.substring()` do?",
        "answer": "Returns the part of the string between the start and end indexes, or to the end of the string.",
        "id": 690
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `String.toLocaleLowerCase()` do?",
        "answer": "Returns the calling string value converted to lower case, according to any locale-specific case mappings.",
        "id": 691
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `String.toLocaleUpperCase()` do?",
        "answer": "Returns the calling string value converted to upper case, according to any locale-specific case mappings.",
        "id": 692
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `String.toLowerCase()` do?",
        "answer": "Returns the calling string value converted to lower case.",
        "id": 693
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `String.toString()` do?",
        "answer": "Returns a string representing the specified object.",
        "id": 694
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `String.toUpperCase()` do?",
        "answer": "Returns the calling string value converted to uppercase.",
        "id": 695
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `String.trim()` do?",
        "answer": "Removes whitespace from both ends of a string.",
        "id": 696
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `String.trimEnd()` do?",
        "answer": "Removes whitespace from the end of a string.",
        "id": 697
    },
    {
        "topic": "JavaScript",
        "question": "What does the JavaScript method `String.trimStart()` do?",
        "answer": "Removes whitespace from the beginning of a string.",
        "id": 698
    },
    {
        "topic": "Cloud / AWS",
        "question": "What does the command `docker run` do?",
        "answer": "Creates and starts a container in one operation.",
        "id": 699
    },
    {
        "topic": "Cloud / AWS",
        "question": "What does the command `docker ps` do?",
        "answer": "Lists running containers.",
        "id": 700
    },
    {
        "topic": "Cloud / AWS",
        "question": "What does the command `docker ps -a` do?",
        "answer": "Lists all containers, both running and stopped.",
        "id": 701
    },
    {
        "topic": "Cloud / AWS",
        "question": "What does the command `docker build` do?",
        "answer": "Builds an image from a Dockerfile.",
        "id": 702
    },
    {
        "topic": "Cloud / AWS",
        "question": "What does the command `docker pull` do?",
        "answer": "Pulls an image or a repository from a registry.",
        "id": 703
    },
    {
        "topic": "Cloud / AWS",
        "question": "What does the command `docker push` do?",
        "answer": "Pushes an image or a repository to a registry.",
        "id": 704
    },
    {
        "topic": "Cloud / AWS",
        "question": "What does the command `docker images` do?",
        "answer": "Lists local images.",
        "id": 705
    },
    {
        "topic": "Cloud / AWS",
        "question": "What does the command `docker rmi` do?",
        "answer": "Removes one or more images.",
        "id": 706
    },
    {
        "topic": "Cloud / AWS",
        "question": "What does the command `docker rm` do?",
        "answer": "Removes one or more containers.",
        "id": 707
    },
    {
        "topic": "Cloud / AWS",
        "question": "What does the command `docker stop` do?",
        "answer": "Stops one or more running containers.",
        "id": 708
    },
    {
        "topic": "Cloud / AWS",
        "question": "What does the command `docker start` do?",
        "answer": "Starts one or more stopped containers.",
        "id": 709
    },
    {
        "topic": "Cloud / AWS",
        "question": "What does the command `docker restart` do?",
        "answer": "Restarts one or more containers.",
        "id": 710
    },
    {
        "topic": "Cloud / AWS",
        "question": "What does the command `docker logs` do?",
        "answer": "Fetches the logs of a container.",
        "id": 711
    },
    {
        "topic": "Cloud / AWS",
        "question": "What does the command `docker exec` do?",
        "answer": "Runs a command in a running container.",
        "id": 712
    },
    {
        "topic": "Cloud / AWS",
        "question": "What does the command `docker cp` do?",
        "answer": "Copies files/folders between a container and the local filesystem.",
        "id": 713
    },
    {
        "topic": "Cloud / AWS",
        "question": "What does the command `docker network ls` do?",
        "answer": "Lists networks.",
        "id": 714
    },
    {
        "topic": "Cloud / AWS",
        "question": "What does the command `docker volume ls` do?",
        "answer": "Lists volumes.",
        "id": 715
    },
    {
        "topic": "Cloud / AWS",
        "question": "What does the command `docker compose up` do?",
        "answer": "Builds, (re)creates, starts, and attaches to containers for a service.",
        "id": 716
    },
    {
        "topic": "Cloud / AWS",
        "question": "What does the command `docker compose down` do?",
        "answer": "Stops containers and removes containers, networks, volumes, and images created by up.",
        "id": 717
    },
    {
        "topic": "Cloud / AWS",
        "question": "What does the command `docker system prune` do?",
        "answer": "Remove all unused containers, networks, images (both dangling and unreferenced), and optionally, volumes.",
        "id": 718
    },
    {
        "topic": "Git / Version Control",
        "question": "What does the command `git init` do?",
        "answer": "Initializes a new Git repository.",
        "id": 719
    },
    {
        "topic": "Git / Version Control",
        "question": "What does the command `git clone` do?",
        "answer": "Clones a repository into a new directory.",
        "id": 720
    },
    {
        "topic": "Git / Version Control",
        "question": "What does the command `git add` do?",
        "answer": "Adds file contents to the index (staging area).",
        "id": 721
    },
    {
        "topic": "Git / Version Control",
        "question": "What does the command `git commit` do?",
        "answer": "Records changes to the repository.",
        "id": 722
    },
    {
        "topic": "Git / Version Control",
        "question": "What does the command `git status` do?",
        "answer": "Shows the working tree status.",
        "id": 723
    },
    {
        "topic": "Git / Version Control",
        "question": "What does the command `git branch` do?",
        "answer": "Lists, creates, or deletes branches.",
        "id": 724
    },
    {
        "topic": "Git / Version Control",
        "question": "What does the command `git checkout` do?",
        "answer": "Switches branches or restores working tree files.",
        "id": 725
    },
    {
        "topic": "Git / Version Control",
        "question": "What does the command `git merge` do?",
        "answer": "Joins two or more development histories together.",
        "id": 726
    },
    {
        "topic": "Git / Version Control",
        "question": "What does the command `git rebase` do?",
        "answer": "Reapplies commits on top of another base tip.",
        "id": 727
    },
    {
        "topic": "Git / Version Control",
        "question": "What does the command `git push` do?",
        "answer": "Updates remote refs along with associated objects.",
        "id": 728
    },
    {
        "topic": "Git / Version Control",
        "question": "What does the command `git pull` do?",
        "answer": "Fetches from and integrates with another repository or a local branch.",
        "id": 729
    },
    {
        "topic": "Git / Version Control",
        "question": "What does the command `git fetch` do?",
        "answer": "Downloads objects and refs from another repository.",
        "id": 730
    },
    {
        "topic": "Git / Version Control",
        "question": "What does the command `git log` do?",
        "answer": "Shows the commit logs.",
        "id": 731
    },
    {
        "topic": "Git / Version Control",
        "question": "What does the command `git diff` do?",
        "answer": "Shows changes between commits, commit and working tree, etc.",
        "id": 732
    },
    {
        "topic": "Git / Version Control",
        "question": "What does the command `git stash` do?",
        "answer": "Stashes the changes in a dirty working directory away.",
        "id": 733
    },
    {
        "topic": "Git / Version Control",
        "question": "What does the command `git stash pop` do?",
        "answer": "Removes a single stashed state from the stash list and applies it on top of the current working tree state.",
        "id": 734
    },
    {
        "topic": "Git / Version Control",
        "question": "What does the command `git reset` do?",
        "answer": "Resets current HEAD to the specified state.",
        "id": 735
    },
    {
        "topic": "Git / Version Control",
        "question": "What does the command `git revert` do?",
        "answer": "Reverts some existing commits.",
        "id": 736
    },
    {
        "topic": "Git / Version Control",
        "question": "What does the command `git rm` do?",
        "answer": "Removes files from the working tree and from the index.",
        "id": 737
    },
    {
        "topic": "Git / Version Control",
        "question": "What does the command `git tag` do?",
        "answer": "Creates, lists, deletes or verifies a tag object signed with GPG.",
        "id": 738
    },
    {
        "topic": "Git / Version Control",
        "question": "What does the command `git remote` do?",
        "answer": "Manages set of tracked repositories.",
        "id": 739
    },
    {
        "id": 740,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #1: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #1. Practice writing out the code!"
    },
    {
        "id": 741,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #2: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #2. Practice writing out the code!"
    },
    {
        "id": 742,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #3: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #3. Practice writing out the code!"
    },
    {
        "id": 743,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #4: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #4. Practice writing out the code!"
    },
    {
        "id": 744,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #5: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #5. Practice writing out the code!"
    },
    {
        "id": 745,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #6: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #6. Practice writing out the code!"
    },
    {
        "id": 746,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #7: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #7. Practice writing out the code!"
    },
    {
        "id": 747,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #8: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #8. Practice writing out the code!"
    },
    {
        "id": 748,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #9: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #9. Practice writing out the code!"
    },
    {
        "id": 749,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #10: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #10. Practice writing out the code!"
    },
    {
        "id": 750,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #11: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #11. Practice writing out the code!"
    },
    {
        "id": 751,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #12: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #12. Practice writing out the code!"
    },
    {
        "id": 752,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #13: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #13. Practice writing out the code!"
    },
    {
        "id": 753,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #14: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #14. Practice writing out the code!"
    },
    {
        "id": 754,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #15: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #15. Practice writing out the code!"
    },
    {
        "id": 755,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #16: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #16. Practice writing out the code!"
    },
    {
        "id": 756,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #17: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #17. Practice writing out the code!"
    },
    {
        "id": 757,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #18: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #18. Practice writing out the code!"
    },
    {
        "id": 758,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #19: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #19. Practice writing out the code!"
    },
    {
        "id": 759,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #20: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #20. Practice writing out the code!"
    },
    {
        "id": 760,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #21: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #21. Practice writing out the code!"
    },
    {
        "id": 761,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #22: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #22. Practice writing out the code!"
    },
    {
        "id": 762,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #23: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #23. Practice writing out the code!"
    },
    {
        "id": 763,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #24: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #24. Practice writing out the code!"
    },
    {
        "id": 764,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #25: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #25. Practice writing out the code!"
    },
    {
        "id": 765,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #26: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #26. Practice writing out the code!"
    },
    {
        "id": 766,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #27: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #27. Practice writing out the code!"
    },
    {
        "id": 767,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #28: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #28. Practice writing out the code!"
    },
    {
        "id": 768,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #29: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #29. Practice writing out the code!"
    },
    {
        "id": 769,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #30: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #30. Practice writing out the code!"
    },
    {
        "id": 770,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #31: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #31. Practice writing out the code!"
    },
    {
        "id": 771,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #32: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #32. Practice writing out the code!"
    },
    {
        "id": 772,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #33: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #33. Practice writing out the code!"
    },
    {
        "id": 773,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #34: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #34. Practice writing out the code!"
    },
    {
        "id": 774,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #35: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #35. Practice writing out the code!"
    },
    {
        "id": 775,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #36: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #36. Practice writing out the code!"
    },
    {
        "id": 776,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #37: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #37. Practice writing out the code!"
    },
    {
        "id": 777,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #38: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #38. Practice writing out the code!"
    },
    {
        "id": 778,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #39: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #39. Practice writing out the code!"
    },
    {
        "id": 779,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #40: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #40. Practice writing out the code!"
    },
    {
        "id": 780,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #41: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #41. Practice writing out the code!"
    },
    {
        "id": 781,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #42: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #42. Practice writing out the code!"
    },
    {
        "id": 782,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #43: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #43. Practice writing out the code!"
    },
    {
        "id": 783,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #44: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #44. Practice writing out the code!"
    },
    {
        "id": 784,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #45: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #45. Practice writing out the code!"
    },
    {
        "id": 785,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #46: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #46. Practice writing out the code!"
    },
    {
        "id": 786,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #47: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #47. Practice writing out the code!"
    },
    {
        "id": 787,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #48: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #48. Practice writing out the code!"
    },
    {
        "id": 788,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #49: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #49. Practice writing out the code!"
    },
    {
        "id": 789,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #50: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #50. Practice writing out the code!"
    },
    {
        "id": 790,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #51: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #51. Practice writing out the code!"
    },
    {
        "id": 791,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #52: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #52. Practice writing out the code!"
    },
    {
        "id": 792,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #53: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #53. Practice writing out the code!"
    },
    {
        "id": 793,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #54: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #54. Practice writing out the code!"
    },
    {
        "id": 794,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #55: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #55. Practice writing out the code!"
    },
    {
        "id": 795,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #56: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #56. Practice writing out the code!"
    },
    {
        "id": 796,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #57: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #57. Practice writing out the code!"
    },
    {
        "id": 797,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #58: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #58. Practice writing out the code!"
    },
    {
        "id": 798,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #59: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #59. Practice writing out the code!"
    },
    {
        "id": 799,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #60: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #60. Practice writing out the code!"
    },
    {
        "id": 800,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #61: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #61. Practice writing out the code!"
    },
    {
        "id": 801,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #62: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #62. Practice writing out the code!"
    },
    {
        "id": 802,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #63: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #63. Practice writing out the code!"
    },
    {
        "id": 803,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #64: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #64. Practice writing out the code!"
    },
    {
        "id": 804,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #65: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #65. Practice writing out the code!"
    },
    {
        "id": 805,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #66: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #66. Practice writing out the code!"
    },
    {
        "id": 806,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #67: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #67. Practice writing out the code!"
    },
    {
        "id": 807,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #68: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #68. Practice writing out the code!"
    },
    {
        "id": 808,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #69: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #69. Practice writing out the code!"
    },
    {
        "id": 809,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #70: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #70. Practice writing out the code!"
    },
    {
        "id": 810,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #71: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #71. Practice writing out the code!"
    },
    {
        "id": 811,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #72: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #72. Practice writing out the code!"
    },
    {
        "id": 812,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #73: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #73. Practice writing out the code!"
    },
    {
        "id": 813,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #74: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #74. Practice writing out the code!"
    },
    {
        "id": 814,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #75: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #75. Practice writing out the code!"
    },
    {
        "id": 815,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #76: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #76. Practice writing out the code!"
    },
    {
        "id": 816,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #77: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #77. Practice writing out the code!"
    },
    {
        "id": 817,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #78: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #78. Practice writing out the code!"
    },
    {
        "id": 818,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #79: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #79. Practice writing out the code!"
    },
    {
        "id": 819,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #80: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #80. Practice writing out the code!"
    },
    {
        "id": 820,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #81: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #81. Practice writing out the code!"
    },
    {
        "id": 821,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #82: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #82. Practice writing out the code!"
    },
    {
        "id": 822,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #83: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #83. Practice writing out the code!"
    },
    {
        "id": 823,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #84: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #84. Practice writing out the code!"
    },
    {
        "id": 824,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #85: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #85. Practice writing out the code!"
    },
    {
        "id": 825,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #86: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #86. Practice writing out the code!"
    },
    {
        "id": 826,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #87: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #87. Practice writing out the code!"
    },
    {
        "id": 827,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #88: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #88. Practice writing out the code!"
    },
    {
        "id": 828,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #89: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #89. Practice writing out the code!"
    },
    {
        "id": 829,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #90: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #90. Practice writing out the code!"
    },
    {
        "id": 830,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #91: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #91. Practice writing out the code!"
    },
    {
        "id": 831,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #92: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #92. Practice writing out the code!"
    },
    {
        "id": 832,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #93: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #93. Practice writing out the code!"
    },
    {
        "id": 833,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #94: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #94. Practice writing out the code!"
    },
    {
        "id": 834,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #95: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #95. Practice writing out the code!"
    },
    {
        "id": 835,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #96: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #96. Practice writing out the code!"
    },
    {
        "id": 836,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #97: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #97. Practice writing out the code!"
    },
    {
        "id": 837,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #98: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #98. Practice writing out the code!"
    },
    {
        "id": 838,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #99: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #99. Practice writing out the code!"
    },
    {
        "id": 839,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #100: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #100. Practice writing out the code!"
    },
    {
        "id": 840,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #101: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #101. Practice writing out the code!"
    },
    {
        "id": 841,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #102: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #102. Practice writing out the code!"
    },
    {
        "id": 842,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #103: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #103. Practice writing out the code!"
    },
    {
        "id": 843,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #104: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #104. Practice writing out the code!"
    },
    {
        "id": 844,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #105: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #105. Practice writing out the code!"
    },
    {
        "id": 845,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #106: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #106. Practice writing out the code!"
    },
    {
        "id": 846,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #107: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #107. Practice writing out the code!"
    },
    {
        "id": 847,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #108: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #108. Practice writing out the code!"
    },
    {
        "id": 848,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #109: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #109. Practice writing out the code!"
    },
    {
        "id": 849,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #110: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #110. Practice writing out the code!"
    },
    {
        "id": 850,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #111: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #111. Practice writing out the code!"
    },
    {
        "id": 851,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #112: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #112. Practice writing out the code!"
    },
    {
        "id": 852,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #113: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #113. Practice writing out the code!"
    },
    {
        "id": 853,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #114: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #114. Practice writing out the code!"
    },
    {
        "id": 854,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #115: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #115. Practice writing out the code!"
    },
    {
        "id": 855,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #116: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #116. Practice writing out the code!"
    },
    {
        "id": 856,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #117: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #117. Practice writing out the code!"
    },
    {
        "id": 857,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #118: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #118. Practice writing out the code!"
    },
    {
        "id": 858,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #119: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #119. Practice writing out the code!"
    },
    {
        "id": 859,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #120: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #120. Practice writing out the code!"
    },
    {
        "id": 860,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #121: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #121. Practice writing out the code!"
    },
    {
        "id": 861,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #122: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #122. Practice writing out the code!"
    },
    {
        "id": 862,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #123: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #123. Practice writing out the code!"
    },
    {
        "id": 863,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #124: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #124. Practice writing out the code!"
    },
    {
        "id": 864,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #125: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #125. Practice writing out the code!"
    },
    {
        "id": 865,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #126: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #126. Practice writing out the code!"
    },
    {
        "id": 866,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #127: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #127. Practice writing out the code!"
    },
    {
        "id": 867,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #128: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #128. Practice writing out the code!"
    },
    {
        "id": 868,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #129: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #129. Practice writing out the code!"
    },
    {
        "id": 869,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #130: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #130. Practice writing out the code!"
    },
    {
        "id": 870,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #131: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #131. Practice writing out the code!"
    },
    {
        "id": 871,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #132: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #132. Practice writing out the code!"
    },
    {
        "id": 872,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #133: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #133. Practice writing out the code!"
    },
    {
        "id": 873,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #134: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #134. Practice writing out the code!"
    },
    {
        "id": 874,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #135: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #135. Practice writing out the code!"
    },
    {
        "id": 875,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #136: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #136. Practice writing out the code!"
    },
    {
        "id": 876,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #137: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #137. Practice writing out the code!"
    },
    {
        "id": 877,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #138: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #138. Practice writing out the code!"
    },
    {
        "id": 878,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #139: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #139. Practice writing out the code!"
    },
    {
        "id": 879,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #140: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #140. Practice writing out the code!"
    },
    {
        "id": 880,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #141: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #141. Practice writing out the code!"
    },
    {
        "id": 881,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #142: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #142. Practice writing out the code!"
    },
    {
        "id": 882,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #143: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #143. Practice writing out the code!"
    },
    {
        "id": 883,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #144: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #144. Practice writing out the code!"
    },
    {
        "id": 884,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #145: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #145. Practice writing out the code!"
    },
    {
        "id": 885,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #146: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #146. Practice writing out the code!"
    },
    {
        "id": 886,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #147: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #147. Practice writing out the code!"
    },
    {
        "id": 887,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #148: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #148. Practice writing out the code!"
    },
    {
        "id": 888,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #149: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #149. Practice writing out the code!"
    },
    {
        "id": 889,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #150: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #150. Practice writing out the code!"
    },
    {
        "id": 890,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #151: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #151. Practice writing out the code!"
    },
    {
        "id": 891,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #152: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #152. Practice writing out the code!"
    },
    {
        "id": 892,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #153: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #153. Practice writing out the code!"
    },
    {
        "id": 893,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #154: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #154. Practice writing out the code!"
    },
    {
        "id": 894,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #155: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #155. Practice writing out the code!"
    },
    {
        "id": 895,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #156: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #156. Practice writing out the code!"
    },
    {
        "id": 896,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #157: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #157. Practice writing out the code!"
    },
    {
        "id": 897,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #158: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #158. Practice writing out the code!"
    },
    {
        "id": 898,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #159: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #159. Practice writing out the code!"
    },
    {
        "id": 899,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #160: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #160. Practice writing out the code!"
    },
    {
        "id": 900,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #161: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #161. Practice writing out the code!"
    },
    {
        "id": 901,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #162: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #162. Practice writing out the code!"
    },
    {
        "id": 902,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #163: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #163. Practice writing out the code!"
    },
    {
        "id": 903,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #164: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #164. Practice writing out the code!"
    },
    {
        "id": 904,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #165: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #165. Practice writing out the code!"
    },
    {
        "id": 905,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #166: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #166. Practice writing out the code!"
    },
    {
        "id": 906,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #167: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #167. Practice writing out the code!"
    },
    {
        "id": 907,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #168: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #168. Practice writing out the code!"
    },
    {
        "id": 908,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #169: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #169. Practice writing out the code!"
    },
    {
        "id": 909,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #170: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #170. Practice writing out the code!"
    },
    {
        "id": 910,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #171: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #171. Practice writing out the code!"
    },
    {
        "id": 911,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #172: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #172. Practice writing out the code!"
    },
    {
        "id": 912,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #173: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #173. Practice writing out the code!"
    },
    {
        "id": 913,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #174: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #174. Practice writing out the code!"
    },
    {
        "id": 914,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #175: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #175. Practice writing out the code!"
    },
    {
        "id": 915,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #176: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #176. Practice writing out the code!"
    },
    {
        "id": 916,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #177: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #177. Practice writing out the code!"
    },
    {
        "id": 917,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #178: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #178. Practice writing out the code!"
    },
    {
        "id": 918,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #179: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #179. Practice writing out the code!"
    },
    {
        "id": 919,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #180: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #180. Practice writing out the code!"
    },
    {
        "id": 920,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #181: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #181. Practice writing out the code!"
    },
    {
        "id": 921,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #182: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #182. Practice writing out the code!"
    },
    {
        "id": 922,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #183: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #183. Practice writing out the code!"
    },
    {
        "id": 923,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #184: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #184. Practice writing out the code!"
    },
    {
        "id": 924,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #185: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #185. Practice writing out the code!"
    },
    {
        "id": 925,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #186: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #186. Practice writing out the code!"
    },
    {
        "id": 926,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #187: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #187. Practice writing out the code!"
    },
    {
        "id": 927,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #188: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #188. Practice writing out the code!"
    },
    {
        "id": 928,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #189: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #189. Practice writing out the code!"
    },
    {
        "id": 929,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #190: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #190. Practice writing out the code!"
    },
    {
        "id": 930,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #191: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #191. Practice writing out the code!"
    },
    {
        "id": 931,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #192: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #192. Practice writing out the code!"
    },
    {
        "id": 932,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #193: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #193. Practice writing out the code!"
    },
    {
        "id": 933,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #194: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #194. Practice writing out the code!"
    },
    {
        "id": 934,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #195: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #195. Practice writing out the code!"
    },
    {
        "id": 935,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #196: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #196. Practice writing out the code!"
    },
    {
        "id": 936,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #197: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #197. Practice writing out the code!"
    },
    {
        "id": 937,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #198: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #198. Practice writing out the code!"
    },
    {
        "id": 938,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #199: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #199. Practice writing out the code!"
    },
    {
        "id": 939,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #200: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #200. Practice writing out the code!"
    },
    {
        "id": 940,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #201: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #201. Practice writing out the code!"
    },
    {
        "id": 941,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #202: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #202. Practice writing out the code!"
    },
    {
        "id": 942,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #203: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #203. Practice writing out the code!"
    },
    {
        "id": 943,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #204: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #204. Practice writing out the code!"
    },
    {
        "id": 944,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #205: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #205. Practice writing out the code!"
    },
    {
        "id": 945,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #206: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #206. Practice writing out the code!"
    },
    {
        "id": 946,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #207: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #207. Practice writing out the code!"
    },
    {
        "id": 947,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #208: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #208. Practice writing out the code!"
    },
    {
        "id": 948,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #209: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #209. Practice writing out the code!"
    },
    {
        "id": 949,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #210: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #210. Practice writing out the code!"
    },
    {
        "id": 950,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #211: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #211. Practice writing out the code!"
    },
    {
        "id": 951,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #212: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #212. Practice writing out the code!"
    },
    {
        "id": 952,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #213: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #213. Practice writing out the code!"
    },
    {
        "id": 953,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #214: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #214. Practice writing out the code!"
    },
    {
        "id": 954,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #215: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #215. Practice writing out the code!"
    },
    {
        "id": 955,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #216: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #216. Practice writing out the code!"
    },
    {
        "id": 956,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #217: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #217. Practice writing out the code!"
    },
    {
        "id": 957,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #218: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #218. Practice writing out the code!"
    },
    {
        "id": 958,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #219: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #219. Practice writing out the code!"
    },
    {
        "id": 959,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #220: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #220. Practice writing out the code!"
    },
    {
        "id": 960,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #221: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #221. Practice writing out the code!"
    },
    {
        "id": 961,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #222: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #222. Practice writing out the code!"
    },
    {
        "id": 962,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #223: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #223. Practice writing out the code!"
    },
    {
        "id": 963,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #224: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #224. Practice writing out the code!"
    },
    {
        "id": 964,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #225: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #225. Practice writing out the code!"
    },
    {
        "id": 965,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #226: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #226. Practice writing out the code!"
    },
    {
        "id": 966,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #227: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #227. Practice writing out the code!"
    },
    {
        "id": 967,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #228: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #228. Practice writing out the code!"
    },
    {
        "id": 968,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #229: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #229. Practice writing out the code!"
    },
    {
        "id": 969,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #230: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #230. Practice writing out the code!"
    },
    {
        "id": 970,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #231: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #231. Practice writing out the code!"
    },
    {
        "id": 971,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #232: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #232. Practice writing out the code!"
    },
    {
        "id": 972,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #233: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #233. Practice writing out the code!"
    },
    {
        "id": 973,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #234: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #234. Practice writing out the code!"
    },
    {
        "id": 974,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #235: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #235. Practice writing out the code!"
    },
    {
        "id": 975,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #236: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #236. Practice writing out the code!"
    },
    {
        "id": 976,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #237: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #237. Practice writing out the code!"
    },
    {
        "id": 977,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #238: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #238. Practice writing out the code!"
    },
    {
        "id": 978,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #239: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #239. Practice writing out the code!"
    },
    {
        "id": 979,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #240: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #240. Practice writing out the code!"
    },
    {
        "id": 980,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #241: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #241. Practice writing out the code!"
    },
    {
        "id": 981,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #242: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #242. Practice writing out the code!"
    },
    {
        "id": 982,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #243: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #243. Practice writing out the code!"
    },
    {
        "id": 983,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #244: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #244. Practice writing out the code!"
    },
    {
        "id": 984,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #245: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #245. Practice writing out the code!"
    },
    {
        "id": 985,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #246: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #246. Practice writing out the code!"
    },
    {
        "id": 986,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #247: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #247. Practice writing out the code!"
    },
    {
        "id": 987,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #248: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #248. Practice writing out the code!"
    },
    {
        "id": 988,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #249: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #249. Practice writing out the code!"
    },
    {
        "id": 989,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #250: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #250. Practice writing out the code!"
    },
    {
        "id": 990,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #251: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #251. Practice writing out the code!"
    },
    {
        "id": 991,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #252: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #252. Practice writing out the code!"
    },
    {
        "id": 992,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #253: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #253. Practice writing out the code!"
    },
    {
        "id": 993,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #254: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #254. Practice writing out the code!"
    },
    {
        "id": 994,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #255: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #255. Practice writing out the code!"
    },
    {
        "id": 995,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #256: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #256. Practice writing out the code!"
    },
    {
        "id": 996,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #257: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #257. Practice writing out the code!"
    },
    {
        "id": 997,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #258: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #258. Practice writing out the code!"
    },
    {
        "id": 998,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #259: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #259. Practice writing out the code!"
    },
    {
        "id": 999,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #260: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #260. Practice writing out the code!"
    },
    {
        "id": 1000,
        "topic": "Algorithms",
        "question": "Algorithm Challenge #261: Can you implement a solution?",
        "answer": "This is a placeholder for Algorithm Challenge #261. Practice writing out the code!"
    },
  {
    "id": 1001,
    "topic": "Frontend / React",
    "question": "What is React?",
    "answer": "A JavaScript library for building user interfaces."
  },
  {
    "id": 1002,
    "topic": "Frontend / React",
    "question": "What is JSX?",
    "answer": "A syntax extension for JavaScript that looks similar to XML or HTML."
  },
  {
    "id": 1003,
    "topic": "Frontend / React",
    "question": "What is the Virtual DOM?",
    "answer": "A lightweight JavaScript representation of the actual DOM."
  },
  {
    "id": 1004,
    "topic": "Frontend / React",
    "question": "What is a component in React?",
    "answer": "A reusable piece of UI that can have its own state and props."
  },
  {
    "id": 1005,
    "topic": "Frontend / React",
    "question": "What are props?",
    "answer": "Inputs to a React component, passed down from a parent component."
  },
  {
    "id": 1006,
    "topic": "Frontend / React",
    "question": "What is state in React?",
    "answer": "An object that determines how a component renders and behaves."
  },
  {
    "id": 1007,
    "topic": "Frontend / React",
    "question": "What is the difference between state and props?",
    "answer": "Props are passed to the component, state is managed within the component."
  },
  {
    "id": 1008,
    "topic": "Frontend / React",
    "question": "What is a pure component?",
    "answer": "A component that renders the same output for the same state and props, without side effects."
  },
  {
    "id": 1009,
    "topic": "Frontend / React",
    "question": "What are React hooks?",
    "answer": "Functions that let you hook into React state and lifecycle features from function components."
  },
  {
    "id": 1010,
    "topic": "Frontend / React",
    "question": "What does useState do?",
    "answer": "It lets you add state variables to functional components."
  },
  {
    "id": 1011,
    "topic": "Frontend / React",
    "question": "What does useEffect do?",
    "answer": "It lets you perform side effects in functional components, similar to lifecycle methods."
  },
  {
    "id": 1012,
    "topic": "Frontend / React",
    "question": "What is a higher-order component (HOC)?",
    "answer": "A function that takes a component and returns a new component."
  },
  {
    "id": 1013,
    "topic": "Frontend / React",
    "question": "What is Redux?",
    "answer": "A predictable state container for JavaScript apps."
  },
  {
    "id": 1014,
    "topic": "Frontend / React",
    "question": "What is the Context API?",
    "answer": "A way to pass data through the component tree without having to pass props down manually at every level."
  },
  {
    "id": 1015,
    "topic": "Frontend / React",
    "question": "What is a controlled component?",
    "answer": "An input form element whose value is controlled by React in state."
  },
  {
    "id": 1016,
    "topic": "Frontend / React",
    "question": "What is an uncontrolled component?",
    "answer": "An input element that maintains its own internal state, usually accessed via a ref."
  },
  {
    "id": 1017,
    "topic": "Frontend / React",
    "question": "What are refs in React?",
    "answer": "They provide a way to access DOM nodes or React elements created in the render method."
  },
  {
    "id": 1018,
    "topic": "Frontend / React",
    "question": "What does useRef do?",
    "answer": "It returns a mutable ref object whose .current property is initialized to the passed argument."
  },
  {
    "id": 1019,
    "topic": "Frontend / React",
    "question": "What is the difference between class and functional components?",
    "answer": "Functional components are simpler, use hooks for state and lifecycle, while class components use ES6 classes and have this.state."
  },
  {
    "id": 1020,
    "topic": "Frontend / React",
    "question": "What are fragments in React?",
    "answer": "A way to group a list of children without adding extra nodes to the DOM."
  },
  {
    "id": 1021,
    "topic": "Frontend / React",
    "question": "What is React Router?",
    "answer": "A standard library for routing in React applications."
  },
  {
    "id": 1022,
    "topic": "Frontend / React",
    "question": "What is the useMemo hook?",
    "answer": "It returns a memoized value, optimizing performance by recomputing only when dependencies change."
  },
  {
    "id": 1023,
    "topic": "Frontend / React",
    "question": "What is the useCallback hook?",
    "answer": "It returns a memoized callback, useful for preventing unnecessary child re-renders."
  },
  {
    "id": 1024,
    "topic": "Frontend / React",
    "question": "What is prop drilling?",
    "answer": "The process of passing props down multiple levels in a component tree to reach a deeply nested component."
  },
  {
    "id": 1025,
    "topic": "Frontend / React",
    "question": "What is the difference between Element and Component?",
    "answer": "An element describes what you want to see on the screen, a component is a function or class that returns elements."
  },
  {
    "id": 1026,
    "topic": "Frontend / React",
    "question": "How does React handle routing?",
    "answer": "Typically using a third-party library like React Router which uses the History API."
  },
  {
    "id": 1027,
    "topic": "Frontend / React",
    "question": "What is strict mode in React?",
    "answer": "A tool for highlighting potential problems in an application, mostly checking for deprecated or unsafe lifecycles."
  },
  {
    "id": 1028,
    "topic": "Frontend / React",
    "question": "What are synthetic events?",
    "answer": "React's cross-browser wrapper around the browser's native event system."
  },
  {
    "id": 1029,
    "topic": "Frontend / React",
    "question": "What is lifting state up?",
    "answer": "Moving state to the closest common ancestor of the components that need it."
  },
  {
    "id": 1030,
    "topic": "Frontend / React",
    "question": "How do you prevent a component from rendering?",
    "answer": "By returning null from its render method or functional body."
  },
  {
    "id": 1031,
    "topic": "Frontend / React",
    "question": "What is React Fiber?",
    "answer": "The core algorithm in React 16+ used to enable incremental rendering."
  },
  {
    "id": 1032,
    "topic": "Frontend / React",
    "question": "What is hydration in React?",
    "answer": "The process of attaching event listeners to the static HTML generated by Server-Side Rendering (SSR)."
  },
  {
    "id": 1033,
    "topic": "Frontend / React",
    "question": "What is Next.js?",
    "answer": "A popular React framework that enables features such as server-side rendering and generating static websites."
  },
  {
    "id": 1034,
    "topic": "Frontend / React",
    "question": "What is the difference between useEffect and useLayoutEffect?",
    "answer": "useEffect runs asynchronously after paint, useLayoutEffect runs synchronously before paint."
  },
  {
    "id": 1035,
    "topic": "Frontend / React",
    "question": "What is a custom hook?",
    "answer": "A JavaScript function whose name starts with 'use' and that may call other hooks."
  },
  {
    "id": 1036,
    "topic": "Frontend / React",
    "question": "What is memoization in React?",
    "answer": "Caching the results of expensive function calls to avoid recalculation, achieved via useMemo or React.memo."
  },
  {
    "id": 1037,
    "topic": "Frontend / React",
    "question": "What does React.memo do?",
    "answer": "A higher order component that skips rendering a component if its props haven't changed."
  },
  {
    "id": 1038,
    "topic": "Frontend / React",
    "question": "What is the difference between useReducer and useState?",
    "answer": "useReducer is preferred for complex state logic involving multiple sub-values or when the next state depends on the previous one."
  },
  {
    "id": 1039,
    "topic": "Frontend / React",
    "question": "What is an Error Boundary?",
    "answer": "A React component that catches JavaScript errors anywhere in their child component tree, logs them, and displays a fallback UI."
  },
  {
    "id": 1040,
    "topic": "Frontend / React",
    "question": "How do you create an Error Boundary?",
    "answer": "By creating a class component and implementing static getDerivedStateFromError or componentDidCatch."
  },
  {
    "id": 1041,
    "topic": "Frontend / React",
    "question": "What is lazy loading in React?",
    "answer": "Loading components only when they are needed using React.lazy and Suspense."
  },
  {
    "id": 1042,
    "topic": "Frontend / React",
    "question": "What is React.Suspense?",
    "answer": "A component that lets you specify a loading indicator in case some components in the tree below it are not yet ready to render."
  },
  {
    "id": 1043,
    "topic": "Frontend / React",
    "question": "What are portals in React?",
    "answer": "A way to render children into a DOM node that exists outside the DOM hierarchy of the parent component (e.g., for modals)."
  },
  {
    "id": 1044,
    "topic": "Frontend / React",
    "question": "How do you pass data between sibling components?",
    "answer": "By lifting the state up to their nearest common parent component, or using Context/Redux."
  },
  {
    "id": 1045,
    "topic": "Frontend / React",
    "question": "What is the purpose of the 'key' prop?",
    "answer": "It helps React identify which items have changed, are added, or are removed in a list, optimizing the rendering process."
  },
  {
    "id": 1046,
    "topic": "Frontend / React",
    "question": "What happens if you don't use keys in lists?",
    "answer": "React will fallback to using the array index as keys, which can lead to performance issues and UI bugs when items are reordered."
  },
  {
    "id": 1047,
    "topic": "Frontend / React",
    "question": "How can you optimize a React app's performance?",
    "answer": "Using useMemo, useCallback, React.memo, code splitting, lazy loading, and avoiding inline functions/objects in props."
  },
  {
    "id": 1048,
    "topic": "Frontend / React",
    "question": "What is the children prop?",
    "answer": "A special prop containing the content passed between a component's opening and closing tags."
  },
  {
    "id": 1049,
    "topic": "Frontend / React",
    "question": "What is the difference between shadow DOM and virtual DOM?",
    "answer": "Shadow DOM is a browser technology for scoping CSS and HTML, Virtual DOM is a concept used by React to optimize DOM updates."
  },
  {
    "id": 1050,
    "topic": "Frontend / React",
    "question": "What is Flux?",
    "answer": "An architectural pattern used in React apps for managing application state via a unidirectional data flow."
  },
  {
    "id": 1051,
    "topic": "Frontend / React",
    "question": "What is unidirectional data flow?",
    "answer": "A design pattern where data has one, and only one, way to be transferred to other parts of the application."
  },
  {
    "id": 1052,
    "topic": "Frontend / React",
    "question": "What is the purpose of useImperativeHandle?",
    "answer": "It customizes the instance value that is exposed to parent components when using ref."
  },
  {
    "id": 1053,
    "topic": "Frontend / React",
    "question": "What is concurrent mode in React?",
    "answer": "A set of new features that help React apps stay responsive and gracefully adjust to the user's device capabilities and network speed."
  },
  {
    "id": 1054,
    "topic": "Frontend / React",
    "question": "What is Server-Side Rendering (SSR)?",
    "answer": "Rendering the React application on the server and sending the fully populated HTML to the client."
  },
  {
    "id": 1055,
    "topic": "Frontend / React",
    "question": "What is Client-Side Rendering (CSR)?",
    "answer": "Rendering the React application in the browser using JavaScript, starting with an empty HTML shell."
  },
  {
    "id": 1056,
    "topic": "Frontend / React",
    "question": "What is Static Site Generation (SSG)?",
    "answer": "Generating HTML pages at build time, which can be served extremely fast by a CDN."
  },
  {
    "id": 1057,
    "topic": "Frontend / React",
    "question": "Why is React considered declarative?",
    "answer": "You describe what the UI should look like for a given state, and React handles the DOM updates (the 'how')."
  },
  {
    "id": 1058,
    "topic": "Frontend / React",
    "question": "What is a pure function?",
    "answer": "A function that always returns the same output for the same input and has no side effects. Redux reducers must be pure functions."
  },
  {
    "id": 1059,
    "topic": "Frontend / React",
    "question": "What is a side effect in React?",
    "answer": "Any operation that interacts with the outside world, like fetching data, modifying the DOM directly, or setting timers."
  },
  {
    "id": 1060,
    "topic": "Frontend / React",
    "question": "How do you handle forms in React?",
    "answer": "Typically using controlled components where input values are stored in state and updated via an onChange handler."
  },
  {
    "id": 1061,
    "topic": "Frontend / React",
    "question": "What is the difference between React and React Native?",
    "answer": "React is used for building web applications, React Native uses React to build native mobile apps for iOS and Android."
  },
  {
    "id": 1062,
    "topic": "Frontend / React",
    "question": "What is the significance of package.json?",
    "answer": "It contains metadata about the project and lists the dependencies and scripts needed to build and run the app."
  },
  {
    "id": 1063,
    "topic": "Frontend / React",
    "question": "What is Webpack?",
    "answer": "A static module bundler for modern JavaScript applications, often used under the hood by Create React App."
  },
  {
    "id": 1064,
    "topic": "Frontend / React",
    "question": "What is Babel?",
    "answer": "A JavaScript compiler that transforms modern JS (ES6+) and JSX into backwards-compatible JavaScript for older browsers."
  },
  {
    "id": 1065,
    "topic": "Frontend / React",
    "question": "What is Create React App (CRA)?",
    "answer": "An officially supported CLI tool to create single-page React applications with zero build configuration."
  },
  {
    "id": 1066,
    "topic": "Frontend / React",
    "question": "What are default props?",
    "answer": "A way to define default values for props using the defaultProps property on a component."
  },
  {
    "id": 1067,
    "topic": "Frontend / React",
    "question": "How do you conditionally render in React?",
    "answer": "Using JavaScript operators like if, the ternary operator (condition ? true : false), or logical AND (condition && true)."
  },
  {
    "id": 1068,
    "topic": "Frontend / React",
    "question": "What is the danger of using dangerouslySetInnerHTML?",
    "answer": "It can expose your application to Cross-Site Scripting (XSS) attacks if the input is not properly sanitized."
  },
  {
    "id": 1069,
    "topic": "Frontend / React",
    "question": "What is React DevTools?",
    "answer": "A browser extension for Chrome and Firefox that allows you to inspect the React component hierarchy and state."
  },
  {
    "id": 1070,
    "topic": "Frontend / React",
    "question": "What is the purpose of the useEffect dependency array?",
    "answer": "It tells React to only re-run the effect if one of the values in the array has changed."
  },
  {
    "id": 1071,
    "topic": "Frontend / React",
    "question": "What happens if you omit the dependency array in useEffect?",
    "answer": "The effect will run after every single render of the component."
  },
  {
    "id": 1072,
    "topic": "Frontend / React",
    "question": "What happens if you pass an empty array [] to useEffect?",
    "answer": "The effect will only run once after the initial render, similar to componentDidMount."
  },
  {
    "id": 1073,
    "topic": "Frontend / React",
    "question": "How do you clean up an effect in useEffect?",
    "answer": "By returning a cleanup function from the effect."
  },
  {
    "id": 1074,
    "topic": "Frontend / React",
    "question": "What is a Thunk in Redux?",
    "answer": "Middleware that allows you to write action creators that return a function instead of an action, useful for async operations."
  },
  {
    "id": 1075,
    "topic": "Frontend / React",
    "question": "What is Redux Saga?",
    "answer": "A middleware library for Redux to handle side effects, often considered an alternative to Redux Thunk using ES6 Generators."
  },
  {
    "id": 1076,
    "topic": "Frontend / React",
    "question": "What is the store in Redux?",
    "answer": "The central object that holds the complete state tree of your app."
  },
  {
    "id": 1077,
    "topic": "Frontend / React",
    "question": "What is a reducer in Redux?",
    "answer": "A pure function that takes the current state and an action, and returns the next state."
  },
  {
    "id": 1078,
    "topic": "Frontend / React",
    "question": "What is an action in Redux?",
    "answer": "A plain JavaScript object that describes what happened, must have a 'type' property."
  },
  {
    "id": 1079,
    "topic": "Frontend / React",
    "question": "What is dispatch in Redux?",
    "answer": "A function used to send actions to the store to trigger a state change."
  },
  {
    "id": 1080,
    "topic": "Frontend / React",
    "question": "What is the React Context API used for?",
    "answer": "Sharing state across the entire app (or part of it) lightly, without using a complex library like Redux."
  },
  {
    "id": 1081,
    "topic": "Frontend / React",
    "question": "How do you access Context in a functional component?",
    "answer": "By using the useContext hook."
  },
  {
    "id": 1082,
    "topic": "Frontend / React",
    "question": "What is forwardRef?",
    "answer": "A function that lets a component pass a ref it receives further down to a child component."
  },
  {
    "id": 1083,
    "topic": "Frontend / React",
    "question": "What is a render prop?",
    "answer": "A technique for sharing code between React components using a prop whose value is a function."
  },
  {
    "id": 1084,
    "topic": "Frontend / React",
    "question": "Why should you avoid using indices as keys?",
    "answer": "Because if the order of items changes, React might reuse the wrong DOM elements, leading to bugs and performance hits."
  },
  {
    "id": 1085,
    "topic": "Frontend / React",
    "question": "What are the advantages of React?",
    "answer": "Component-based architecture, virtual DOM for performance, unidirectional data flow, strong community, and rich ecosystem."
  },
  {
    "id": 1086,
    "topic": "Frontend / React",
    "question": "What is the disadvantage of React?",
    "answer": "High pace of change, poor documentation for some third-party libs, and it's only a view library (requires other libs for routing, state, etc)."
  },
  {
    "id": 1087,
    "topic": "Frontend / React",
    "question": "What is Styled Components?",
    "answer": "A library that allows you to write CSS in JS using tagged template literals, scoping styles to components."
  },
  {
    "id": 1088,
    "topic": "Frontend / React",
    "question": "What is React Testing Library?",
    "answer": "A testing utility that encourages writing tests that resemble the way your software is used, focusing on DOM nodes rather than instances."
  },
  {
    "id": 1089,
    "topic": "Frontend / React",
    "question": "What is Jest?",
    "answer": "A delightful JavaScript Testing Framework with a focus on simplicity, commonly used with React."
  },
  {
    "id": 1090,
    "topic": "Frontend / React",
    "question": "How do you handle asynchronous data fetching in React?",
    "answer": "Using fetch or axios inside useEffect, handling loading and error states in component state."
  },
  {
    "id": 1091,
    "topic": "Frontend / React",
    "question": "What is the difference between React.cloneElement and React.createElement?",
    "answer": "createElement creates a new element from a type, cloneElement creates a new element using an existing element as a starting point."
  },
  {
    "id": 1092,
    "topic": "Frontend / React",
    "question": "What is the StrictMode warning about 'findDOMNode is deprecated'?",
    "answer": "It means a component or library is using an old, deprecated way to access DOM nodes instead of using refs."
  },
  {
    "id": 1093,
    "topic": "Frontend / React",
    "question": "What is the role of ReactDOM?",
    "answer": "It provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside the React model."
  },
  {
    "id": 1094,
    "topic": "Frontend / React",
    "question": "What is React.Fragment short syntax?",
    "answer": "Empty angle brackets: <>...</>."
  },
  {
    "id": 1095,
    "topic": "Frontend / React",
    "question": "How can you force a component to re-render without changing state or props?",
    "answer": "You shouldn't typically do this, but you can use a dummy state toggle or a key prop change."
  },
  {
    "id": 1096,
    "topic": "Frontend / React",
    "question": "What is the difference between shallow routing and regular routing in Next.js?",
    "answer": "Shallow routing allows you to change the URL without running data fetching methods again, keeping state intact."
  },
  {
    "id": 1097,
    "topic": "Frontend / React",
    "question": "What is the 'window is not defined' error in Next.js?",
    "answer": "It occurs when you try to access the browser's window object during server-side rendering (where window doesn't exist)."
  },
  {
    "id": 1098,
    "topic": "Frontend / React",
    "question": "How do you fix 'window is not defined' in React/Next.js?",
    "answer": "Check if typeof window !== 'undefined' before accessing it, or put the code inside a useEffect (which only runs on the client)."
  },
  {
    "id": 1099,
    "topic": "Frontend / React",
    "question": "What is Tailwind CSS?",
    "answer": "A utility-first CSS framework that can be easily integrated with React to style components directly in className."
  },
  {
    "id": 1100,
    "topic": "Frontend / React",
    "question": "Why is React so popular?",
    "answer": "Its declarative nature, component reusability, virtual DOM performance, and the massive ecosystem built around it."
  },
  {
    "id": 1101,
    "topic": "Git / Version Control",
    "question": "What is Git?",
    "answer": "A distributed version control system for tracking changes in source code during software development."
  },
  {
    "id": 1102,
    "topic": "Git / Version Control",
    "question": "What is the difference between Git and GitHub?",
    "answer": "Git is a version control system (a tool); GitHub is a cloud-based hosting service that lets you manage Git repositories."
  },
  {
    "id": 1103,
    "topic": "Git / Version Control",
    "question": "What does 'git clone' do?",
    "answer": "It creates a local copy of a remote repository."
  },
  {
    "id": 1104,
    "topic": "Git / Version Control",
    "question": "What is a commit in Git?",
    "answer": "A snapshot of the repository at a specific point in time."
  },
  {
    "id": 1105,
    "topic": "Git / Version Control",
    "question": "What is the staging area (index) in Git?",
    "answer": "An intermediate area where you format and review commits before completing the commit."
  },
  {
    "id": 1106,
    "topic": "Git / Version Control",
    "question": "What does 'git add' do?",
    "answer": "It adds file contents to the staging area."
  },
  {
    "id": 1107,
    "topic": "Git / Version Control",
    "question": "What is the difference between 'git pull' and 'git fetch'?",
    "answer": "'git fetch' downloads new data from a remote repository, while 'git pull' fetches the data AND merges it into your current branch."
  },
  {
    "id": 1108,
    "topic": "Git / Version Control",
    "question": "What is a branch in Git?",
    "answer": "A movable pointer to one of the commits, allowing you to diverge from the main line of development."
  },
  {
    "id": 1109,
    "topic": "Git / Version Control",
    "question": "What does 'git merge' do?",
    "answer": "It joins two or more development histories (branches) together."
  },
  {
    "id": 1110,
    "topic": "Git / Version Control",
    "question": "What is a merge conflict?",
    "answer": "It occurs when two branches have changed the same part of the same file, and Git cannot automatically determine which version to keep."
  },
  {
    "id": 1111,
    "topic": "Git / Version Control",
    "question": "What is 'git rebase'?",
    "answer": "A process of moving or combining a sequence of commits to a new base commit."
  },
  {
    "id": 1112,
    "topic": "Git / Version Control",
    "question": "What is the difference between 'git merge' and 'git rebase'?",
    "answer": "Merge creates a new commit preserving history; Rebase rewrites history by moving commits to the tip of another branch, creating a linear history."
  },
  {
    "id": 1113,
    "topic": "Git / Version Control",
    "question": "What does 'git stash' do?",
    "answer": "It temporarily shelves (or stashes) changes you've made to your working copy so you can work on something else, and then come back and re-apply them later."
  },
  {
    "id": 1114,
    "topic": "Git / Version Control",
    "question": "How do you revert a commit that has already been pushed?",
    "answer": "Use 'git revert <commit-hash>' to create a new commit that undoes the changes from the previous commit."
  },
  {
    "id": 1115,
    "topic": "Git / Version Control",
    "question": "What is 'git cherry-pick'?",
    "answer": "A command that enables arbitrary Git commits to be picked by reference and appended to the current working HEAD."
  },
  {
    "id": 1116,
    "topic": "Git / Version Control",
    "question": "What is 'git bisect'?",
    "answer": "A utility that uses binary search to find the commit that introduced a bug."
  },
  {
    "id": 1117,
    "topic": "Git / Version Control",
    "question": "What does 'git reset --hard' do?",
    "answer": "It resets the staging area and the working directory to match the specified commit, discarding all uncommitted changes."
  },
  {
    "id": 1118,
    "topic": "Git / Version Control",
    "question": "What is the difference between 'git reset --soft', '--mixed', and '--hard'?",
    "answer": "Soft: keeps changes in staging. Mixed (default): keeps changes in working directory but unstages them. Hard: discards all changes."
  },
  {
    "id": 1119,
    "topic": "Git / Version Control",
    "question": "What is a detached HEAD in Git?",
    "answer": "When you checkout a specific commit instead of a branch. New commits won't belong to any branch."
  },
  {
    "id": 1120,
    "topic": "Git / Version Control",
    "question": "How do you change the message of your last commit?",
    "answer": "Use 'git commit --amend'."
  },
  {
    "id": 1121,
    "topic": "Git / Version Control",
    "question": "What is a bare repository in Git?",
    "answer": "A repository that doesn't contain a working directory (used primarily for sharing/central servers)."
  },
  {
    "id": 1122,
    "topic": "Git / Version Control",
    "question": "What is 'git reflog'?",
    "answer": "A mechanism to record when the tip of branches and other references were updated in the local repository (useful for recovering lost commits)."
  },
  {
    "id": 1123,
    "topic": "Git / Version Control",
    "question": "What is a fast-forward merge?",
    "answer": "A merge where the current branch tip is a direct ancestor of the target branch, so Git just moves the pointer forward without creating a merge commit."
  },
  {
    "id": 1124,
    "topic": "Git / Version Control",
    "question": "What is the purpose of '.gitignore'?",
    "answer": "A text file that tells Git which files or directories to ignore in a project."
  },
  {
    "id": 1125,
    "topic": "Git / Version Control",
    "question": "What is 'git blame'?",
    "answer": "A command that shows what revision and author last modified each line of a file."
  },
  {
    "id": 1126,
    "topic": "Web Security",
    "question": "What is OWASP?",
    "answer": "The Open Web Application Security Project, a non-profit foundation that works to improve the security of software."
  },
  {
    "id": 1127,
    "topic": "Web Security",
    "question": "What is SQL Injection (SQLi)?",
    "answer": "A vulnerability where an attacker can interfere with the queries that an application makes to its database, often allowing them to view, modify, or delete data."
  },
  {
    "id": 1128,
    "topic": "Web Security",
    "question": "How do you prevent SQL Injection?",
    "answer": "By using parameterized queries (Prepared Statements), ORMs, and proper input validation/escaping."
  },
  {
    "id": 1129,
    "topic": "Web Security",
    "question": "What is Cross-Site Scripting (XSS)?",
    "answer": "A vulnerability where an attacker injects malicious client-side scripts into web pages viewed by other users."
  },
  {
    "id": 1130,
    "topic": "Web Security",
    "question": "What are the types of XSS?",
    "answer": "Stored (Persistent), Reflected (Non-Persistent), and DOM-based XSS."
  },
  {
    "id": 1131,
    "topic": "Web Security",
    "question": "How do you prevent XSS?",
    "answer": "By escaping/encoding user input on rendering, validating input, and using Content Security Policy (CSP) headers."
  },
  {
    "id": 1132,
    "topic": "Web Security",
    "question": "What is Cross-Site Request Forgery (CSRF)?",
    "answer": "An attack that forces an end user to execute unwanted actions on a web application in which they're currently authenticated."
  },
  {
    "id": 1133,
    "topic": "Web Security",
    "question": "How do you prevent CSRF?",
    "answer": "Using anti-CSRF tokens (Synchronizer Token Pattern), SameSite cookie attributes, and checking the Referer/Origin headers."
  },
  {
    "id": 1134,
    "topic": "Web Security",
    "question": "What is a Man-in-the-Middle (MitM) attack?",
    "answer": "An attack where the attacker secretly relays and possibly alters the communications between two parties who believe they are directly communicating."
  },
  {
    "id": 1135,
    "topic": "Web Security",
    "question": "How do you prevent MitM attacks on the web?",
    "answer": "By using HTTPS (TLS/SSL) to encrypt communication and implementing HSTS (HTTP Strict Transport Security)."
  },
  {
    "id": 1136,
    "topic": "Web Security",
    "question": "What is CORS (Cross-Origin Resource Sharing)?",
    "answer": "A mechanism that uses additional HTTP headers to tell browsers to give a web application running at one origin, access to selected resources from a different origin."
  },
  {
    "id": 1137,
    "topic": "Web Security",
    "question": "Is CORS a security feature to protect the server?",
    "answer": "No, CORS is a security feature enforced by the BROWSER to protect the user. It relaxes the Same-Origin Policy."
  },
  {
    "id": 1138,
    "topic": "Web Security",
    "question": "What is the Same-Origin Policy (SOP)?",
    "answer": "A critical security concept that restricts how a document or script loaded from one origin can interact with a resource from another origin."
  },
  {
    "id": 1139,
    "topic": "Web Security",
    "question": "What is clickjacking?",
    "answer": "A malicious technique of tricking a user into clicking on something different from what the user perceives, often using transparent iframes."
  },
  {
    "id": 1140,
    "topic": "Web Security",
    "question": "How do you prevent clickjacking?",
    "answer": "By using the X-Frame-Options HTTP header or CSP frame-ancestors directive to prevent the site from being rendered inside an iframe."
  },
  {
    "id": 1141,
    "topic": "Web Security",
    "question": "What is an Insecure Direct Object Reference (IDOR)?",
    "answer": "An access control vulnerability that arises when an application provides direct access to objects based on user-supplied input (like changing an ID in the URL to view someone else's account)."
  },
  {
    "id": 1142,
    "topic": "Web Security",
    "question": "How do you prevent IDOR?",
    "answer": "By implementing robust access control checks to ensure the currently authenticated user is authorized to access the requested object."
  },
  {
    "id": 1143,
    "topic": "Web Security",
    "question": "What is Directory Traversal (Path Traversal)?",
    "answer": "An exploit that allows an attacker to access files and directories that are stored outside the web root folder (e.g., using '../')."
  },
  {
    "id": 1144,
    "topic": "Web Security",
    "question": "What is the purpose of hashing passwords?",
    "answer": "To ensure that if the database is compromised, the plaintext passwords are not immediately visible. Hashing is a one-way mathematical function."
  },
  {
    "id": 1145,
    "topic": "Web Security",
    "question": "Why should you use salt when hashing passwords?",
    "answer": "Salt (random data added before hashing) defends against rainbow table attacks and ensures identical passwords have different hashes."
  },
  {
    "id": 1146,
    "topic": "Web Security",
    "question": "What is a popular algorithm for password hashing?",
    "answer": "Bcrypt, Argon2, or PBKDF2."
  },
  {
    "id": 1147,
    "topic": "Web Security",
    "question": "What is a Denial of Service (DoS) attack?",
    "answer": "A cyber-attack in which the perpetrator seeks to make a machine or network resource unavailable to its intended users by temporarily or indefinitely disrupting services."
  },
  {
    "id": 1148,
    "topic": "Web Security",
    "question": "What is Content Security Policy (CSP)?",
    "answer": "An added layer of security that helps to detect and mitigate certain types of attacks, including XSS and data injection attacks, by defining approved sources of content."
  },
  {
    "id": 1149,
    "topic": "Web Security",
    "question": "What is a JWT (JSON Web Token)?",
    "answer": "An open standard for securely transmitting information between parties as a JSON object, often used for authorization."
  },
  {
    "id": 1150,
    "topic": "Web Security",
    "question": "What is the danger of storing JWTs in Local Storage?",
    "answer": "They are susceptible to XSS attacks. If an attacker injects JavaScript, they can easily read Local Storage and steal the token. HttpOnly cookies are a more secure alternative."
  }
];
