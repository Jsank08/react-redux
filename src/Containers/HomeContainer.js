import Home from '../Components/Home'
import { connect } from 'react-redux'
import { addToCart } from '../Services/actions/actions'

const mapStateToProps = state => ({
    // data: state
})
const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data))

})
export default connect(mapStateToProps, mapDispatchToProps)(Home)
// export default Home;