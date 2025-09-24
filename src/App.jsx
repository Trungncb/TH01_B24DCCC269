import { useState } from "react";


function TodoList() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div style={{ marginBottom: "30px" }}>
      <h2>Bài 1: To-do List</h2>
      <input
        type="text"
        placeholder="Nhập công việc"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTodo}>Thêm</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => removeTodo(index)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


function ColorPicker() {
  const [color, setColor] = useState(null);

  return (
    <div style={{ marginBottom: "30px" }}>
      <h2>Bài 2: Color Picker</h2>
      <button onClick={() => setColor("red")}>Đỏ</button>
      <button onClick={() => setColor("blue")}>Xanh</button>
      <button onClick={() => setColor("yellow")}>Vàng</button>

      <ColorBox color={color || "transparent"} />
    </div>
  );
}

function ColorBox({ color }) {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: color,
        marginTop: "10px",
        border: "2px solid black",
      }}
    />
  );
}

function ShoppingCart() {
  const products = [
    { name: "Sách", price: 10000 },
    { name: "Bút", price: 5000 },
    { name: "Vở", price: 7000 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ marginBottom: "30px" }}>
      <h2>Bài 3: Giỏ hàng</h2>
      <h3>Sản phẩm</h3>
      <ul>
        {products.map((p, i) => (
          <li key={i}>
            {p.name} - {p.price.toLocaleString()}₫{" "}
            <button onClick={() => addToCart(p)}>Thêm vào giỏ</button>
          </li>
        ))}
      </ul>

      <h3>Giỏ hàng</h3>
      <ul>
        {cart.map((item, i) => (
          <li key={i}>
            {item.name} - {item.price.toLocaleString()}₫
          </li>
        ))}
      </ul>
      <p>
        <strong>Tổng tiền: {totalPrice.toLocaleString()}₫</strong>
      </p>
    </div>
  );
}


function Post({ text }) {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  return (
    <div
      style={{
        border: "2px solid black",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "8px",
      }}
    >
      <p>{text}</p>
      <button onClick={() => setLike(like + 1)}>👍 {like}</button>{" "}
      <button onClick={() => setDislike(dislike + 1)}>👎 {dislike}</button>
    </div>
  );
}

function LikeDislikePosts() {
  const posts = [
    "Học ReactJS có khó không?",
    "Props và State là gì?",
    "Lập trình web có vui không?",
  ];

  return (
    <div style={{ marginBottom: "30px" }}>
      <h2>Bài 4: Like/Dislike Post</h2>
      {posts.map((p, i) => (
        <Post key={i} text={p} />
      ))}
    </div>
  );
}


function QuizApp() {
  const questions = [
    {
      question: "React là gì?",
      options: ["Ngôn ngữ lập trình", "Framework", "Library JS", "Database"],
      answer: 2,
    },
    {
      question: "JSX là gì?",
      options: ["CSS", "JavaScript XML", "HTML", "NodeJS"],
      answer: 1,
    },
    {
      question: "useState dùng để làm gì?",
      options: [
        "Quản lý state",
        "Tạo component",
        "Render UI",
        "Chạy server",
      ],
      answer: 0,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (index) => {
    if (index === questions[current].answer) {
      setScore(score + 1);
    }
    setCurrent(current + 1);
  };

  if (current >= questions.length) {
    return (
      <div style={{ marginBottom: "30px" }}>
        <h2>Bài 5: Quiz App</h2>
        <p>
          Bạn trả lời đúng {score}/{questions.length} câu.
        </p>
      </div>
    );
  }

  return (
    <div style={{ marginBottom: "30px" }}>
      <h2>Bài 5: Quiz App</h2>
      <p>
        <strong>Câu {current + 1}:</strong> {questions[current].question}
      </p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {questions[current].options.map((opt, i) => (
          <li key={i} style={{ marginBottom: "5px" }}>
            <button onClick={() => handleAnswer(i)}>{opt}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <TodoList />
      <ColorPicker />
      <ShoppingCart />
      <LikeDislikePosts />
      <QuizApp />
    </div>
  );
}
