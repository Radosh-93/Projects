import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.authorizedUserId
			if(!userId) {
				this.props.history.push('/login')
			}
		}
		this.props.getProfile(userId) //визиваємо функцію Thunk (getProfile)
		this.props.getUserStatus(userId)
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		let userId = this.props.match.params.userId
			? this.props.match.params.userId
			: this.props.authorizedUserId;
		if(prevProps.match.params.userId !== this.props.match.params.userId) {
			this.props.getProfile(userId);
			this.props.getUserStatus(userId)
		}
	}

	render() {
		return (
			<Profile {...this.props}/> // так передаємо всі props в дочірню компоненту (а не так: props = {this.props})
		)
	}
}
let mapStateToProps = (state) => ({
	userData: state.profilePage.userData,
	userStatus: state.profilePage.userStatus,
	isLogging: state.auth.isLogging,
	authorizedUserId: state.auth.userId
})
export default compose(
	connect(mapStateToProps, {getProfile, getUserStatus, updateUserStatus}),
	withRouter,
	//withAuthRedirect
)(ProfileContainer)