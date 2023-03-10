import { Component } from "react"
import Userchat from "../userchat"
import {FiUsers} from 'react-icons/fi'
import "./index.css"

const userlist = ["Alan", "Bob", "Carol", "Dean", "Elin"]
// taking time
const msgTime = new Date(),
    curTime = msgTime.getHours() + ':' + msgTime.getMinutes()



const userChatList =
{
    id: "1",
    userName: "PubNub Bot",
    time: curTime,
    userMessage: "Welcome to Team Chat. Send a message now to start interacting with other user in the app",
    isLiked: false,
    backgroundColor: "red",
}

class Homepage extends Component {
    state = {
        userName: 'Alan', userMessage: '', backgroundColor: "red", userDataArray: [userChatList], time: curTime,
    }

    onInputElement = (event) => {
        this.setState({ userMessage: event.target.value })
    }

    // on submission 
    onSubmitFormel = (event) => {
        const { userName, userMessage, isLiked, time } = this.state
        event.preventDefault();
        // Taking Random Name and Added to State
        let userlistLength = userlist.length
        let randomName = Math.ceil(Math.random() * userlistLength - 1)
        this.setState({ userName: userlist[randomName] })
        this.setState({ time: curTime })
        // setup background color
        let bgColorsArray = ["a", "b", "c", "d", "e", "f"];
        let randomBgColors = bgColorsArray.length;
        let randomBgColorsIndex = Math.ceil(Math.random() * randomBgColors);
        let randomBgColorsNumber = Math.floor(Math.random() * 99999) + 10000;
        let backgroundColors = "#" + bgColorsArray[randomBgColorsIndex] + randomBgColorsNumber;
        if (userMessage === "") {
            alert("please enter valid input")
        } else {
            const NewUserDetails = {
                userName,
                time,
                userMessage,
                isLiked,
                backgroundColor:backgroundColors,
            }
            // adding new input array to old array
            this.setState(prevState => ({ userDataArray: [...prevState.userDataArray, NewUserDetails] }))
            this.setState({ userMessage: "" })
        }

    }


    render() {
        const { userDataArray, userMessage } = this.state

        return (
            <div className="home-div">
                <div className="home-main-div">
                    <div className="header-main-div">
                        <div>
                            <h2 className="home-intro-head">Intruduction</h2>
                            <p className="home-intro-para">This Channer For Company Wide Chatter</p>

                        </div>
                        <div className="count-number-div">
                            <span>3 | </span>
                            <span>100</span>
                            <FiUsers className="user-count-icon" />
                        </div>
                    </div>
                    <div className="home-bottom-div">
                        <ol className="homeChatBoxDiv">
                            {
                                userDataArray.map((each) => (
                                    <Userchat userDataArray={each} />
                                ))
                            }
                        </ol>
                        <form onSubmit={this.onSubmitFormel}>
                            <input id="homeInputFeald" className="home-input" value={userMessage} onChange={this.onInputElement} type="text" />
                        </form>
                    </div>
                </div>
            </div>)
    }
}

export default Homepage