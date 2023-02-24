import '../App.css';
function Home() {
    return (
    <div className="App">
    <div className='App-header'>
        <button>
            <a href="/CBB">
                Click here to navigate to the College Basketball Page
            </a>
        </button>
        <button>
            <a href="/NBA">
                Click here to navigate to the National Basketball Association Page
            </a>
        </button>
        <button>
            <a href="/NFL">
                Click here to navigate to the National Football League Page
            </a>
        </button>
        <button>
            <a href="/MLB">
                Click here to navigate to the Major League Baseball Page
            </a>
        </button>
    </div>
  </div>
);
}

export default Home;