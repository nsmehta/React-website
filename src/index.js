import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    Route,
    NavLink,
    HashRouter,
} from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Row,
    Col,
} from 'reactstrap';
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import 'bootstrap/dist/css/bootstrap.min.css';

class ShoppingList extends React.Component {
    render() {
      return (
        <div className="shopping-list">
          <h1>Shopping List for {this.props.name}</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
        </div>
      );
    }
  }

// class Square extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             value: null,
//         }
//     }
//     render() {
//       return (
//         <button
//          className="square"
//          onClick={() => this.props.onClick()}
//         >
//           {this.props.value}
//         </button>
//       );
//     }
// }

function Square(props) {
    return (
    <button
        className="square"
        onClick={props.onClick}
    >
        {props.value}
    </button>
    );
}



class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }


        if (this.state.xIsNext) {
            squares[i] = 'X';
        }
        else {
            squares[i] = 'O';
        }
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        })
        
        this.setState({squares: squares});
    }


    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]} 
                onClick={() => this.handleClick(i)}
            />
        );
    }

    render() {
        // const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>
            <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
            </div>
            <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>
        </div>
        );

    }
}

class Game extends React.Component {
    render() {
        return (
        <div className="game">
            <div className="game-board">
            <Board />
            </div>
            <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
            </div>
        </div>
        );
    }
}


function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for(let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

// ========================================

class Example extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
          collapsed: true
        };
    }
    
    toggleNavbar() {
        this.setState({
          collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
            <div>
                <Navbar color="faded" light>
                    <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="/projects/">Projects</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/contact">Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

class Body extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
          collapsed: true
        };
    }
    
    toggleNavbar() {
        this.setState({
          collapsed: !this.state.collapsed
        });
    }

    closeNavbar() {
        if (this.state.collapsed != true) {
        this.toggleNavbar();
        }
    }

    render() {
        return (
            <HashRouter>
                <header>
                    <Row>
                    <Col sm="12" md="12" lg="12">
                        <Navbar className="navbar-inverse" toggleable> 
                        <NavbarToggler className="navbar-light" right onClick={this.toggleNavbar} />
                        <NavbarBrand href="/">
                            <NavLink exact to="/">Nikhil Mehta</NavLink>
                        </NavbarBrand>
                        <Collapse isOpen={!this.state.collapsed} navbar>
                            <Nav navbar>
                            <NavItem onClick={this.toggleNavbar}>
                                <NavLink exact to="/">About</NavLink>
                            </NavItem>
                            <NavItem onClick={this.toggleNavbar}>
                                <NavLink to="/projects">Projects</NavLink>
                            </NavItem>
                            <NavItem onClick={this.toggleNavbar}>
                                <NavLink to="/contact">Contact</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                        </Navbar>
                        <div className="content">
                            <Route exact path="/" component={About}/>
                            <Route path="/projects" component={Projects}/>
                            <Route path="/contact" component={Contact}/>
                        </div>

                    </Col>
                    </Row>
                </header>

            </HashRouter>
        );
    }
}

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-dark text-center">
                <footer>
                <p>
                    &copy; 2018 Nikhil Mehta 
                </p>
                </footer>
            </div>
        )
    }
}

// ========================================

ReactDOM.render(
    <div>
        <Body />
        <Footer />
    </div>,
    document.getElementById('root')
);

