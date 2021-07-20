import Rocket from "./Rocket";
import { connect } from 'react-redux';

const mapStateToProps = (state) =>({
    position: state.asadReducer
})

export default connect(mapStateToProps, null)(Rocket);