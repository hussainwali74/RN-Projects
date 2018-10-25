import { connect } from 'react-redux';
import Login from '../pages/Login';
import { setName } from '../Actions';

const mapStateToProps = (state) => ({
    name: state.name
});

const mapDispatchToProps = (dispatch) => ({
    setName: name => dispatch(setName(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);