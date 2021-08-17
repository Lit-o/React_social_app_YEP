import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {

        //здесь мы с помощью withRouter и <Route path='/profile/:userId'
        //                        render={() => <ProfileContainer />} />
        //                        в App.js достали данные строки.
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 11;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfile(response.data);
        })
    }
    render() {
        return (
                    //можно было бы написать props={this.props},
                    // но лучше "раскукожить" спред-оператором и он
                    // уже передаст profile={this.props.profile}
                    // postsData={this.props.postsData}
                    // letterL={this.props.letterL}
            // либо {...this.props} - это пропсы извне если они придут,
            // а еще получается profile из нашего стейта
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
};

// let mapStateToProps = (state) => ({}) если функция возвращает объект, то {} обрамляем ()
let mapStateToProps = (state) => ({profile: state.profilePage.profile});

let WithUrlDataProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataProfileContainer );