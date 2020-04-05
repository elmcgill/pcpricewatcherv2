import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {postLinks} from '../../actions/watcherActions';

class Input extends Component{

    constructor(props){
        super(props);
        this.state = {
            amazonCPU: '',
            neweggCPU: '',
            amazonMOBO: '',
            neweggMOBO: '',
            amazonGPU: '',
            neweggGPU: '',
            amazonRAM: '',
            neweggRAM: '',
            amazonHDD: '',
            neweggHDD: '',
            amazonPSU: '',
            neweggPSU: '',
            amazonCASE: '',
            neweggCASE: '',
            amazonCooler: '',
            neweggCooler: '',
            amazonFans: '',
            neweggFans: ''
        }

        this.setBox = this.setBox.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit happened');
        const sendData = {
            cpu:[this.state.amazonCPU, this.state.neweggCPU],
            mobo:[this.state.amazonMOBO, this.state.neweggMOBO],
            gpu:[this.state.amazonGPU, this.state.neweggGPU],
            ram:[this.state.amazonRAM, this.state.neweggRAM],
            storage:[this.state.amazonHDD, this.state.neweggHDD],
            psu:[this.state.amazonPSU, this.state.neweggPSU],
            case:[this.state.amazonCASE, this.state.neweggCASE],
            'case fans': [this.state.amazonFans, this.state.neweggFans],
            'cpu cooler': [this.state.amazonCooler, this.state.neweggCooler]
        }
        this.props.postLinks(sendData);
        this.setState({
            amazonCPU: '',
            neweggCPU: '',
            amazonMOBO: '',
            neweggMOBO: '',
            amazonGPU: '',
            neweggGPU: '',
            amazonRAM: '',
            neweggRAM: '',
            amazonHDD: '',
            neweggHDD: '',
            amazonPSU: '',
            neweggPSU: '',
            amazonCASE: '',
            neweggCASE: '',
            amazonCooler: '',
            neweggCooler: '',
            amazonFans: '',
            neweggFans: ''
        });
        document.getElementById('partLinks').reset();
    }

    setBox = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render(){
        return(
            <div>
                <h1>Input part links below</h1>
                <form id='partLinks' onSubmit={this.handleSubmit}>
                    <h1>Core Components</h1>
                    <h3>CPU</h3>
                    <p><input type='text' placeholder='amazon link' name='amazonCPU' onInput={this.setBox}/></p>
                    <p><input type='text' placeholder='newegg link' name='neweggCPU' onInput={this.setBox}/></p>
                    <h3>Motherboard</h3>
                    <p><input type='text' placeholder='amazon link' name='amazonMOBO' onInput={this.setBox}/></p>
                    <p><input type='text' placeholder='newegg link' name='neweggMOBO' onInput={this.setBox}/></p>
                    <h3>GPU</h3>
                    <p><input type='text' placeholder='amazon link' name='amazonGPU' onInput={this.setBox}/></p>
                    <p><input type='text' placeholder='newegg link' name='neweggGPU' onInput={this.setBox}/></p>
                    <h3>RAM</h3>
                    <p><input type='text' placeholder='amazon link' name='amazonRAM' onInput={this.setBox}/></p>
                    <p><input type='text' placeholder='newegg link' name='neweggRAM' onInput={this.setBox}/></p>
                    <h3>SSD/HDD</h3>
                    <p><input type='text' placeholder='amazon link' name='amazonHDD' onInput={this.setBox}/></p>
                    <p><input type='text' placeholder='newegg link' name='neweggHDD' onInput={this.setBox}/></p>
                    <h3>PSU</h3>
                    <p><input type='text' placeholder='amazon link' name='amazonPSU' onInput={this.setBox}/></p>
                    <p><input type='text' placeholder='newegg link' name='neweggPSU' onInput={this.setBox}/></p>
                    <h3>Case</h3>
                    <p><input type='text' placeholder='amazon link' name='amazonCASE' onInput={this.setBox}/></p>
                    <p><input type='text' placeholder='newegg link' name='neweggCASE' onInput={this.setBox}/></p>
                    <h1>Additonal Components</h1>
                    <h3>CPU Coooler</h3>
                    <p><input type='text' placeholder='amazon link' name='amazonCooler' onInput={this.setBox}/></p>
                    <p><input type='text' placeholder='newegg link' name='neweggCooler' onInput={this.setBox}/></p>
                    <h3>Fans</h3>
                    <p><input type='text' placeholder='amazon link' name='amazonFans' onInput={this.setBox}/></p>
                    <p><input type='text' placeholder='newegg link' name='neweggFans' onInput={this.setBox}/></p>
                    <p><button>Submit for mailing updates</button></p>
                </form>
            </div>
        );
    }
}

Input.propTypes = {
    postLinks: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    links:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    id: state.parts.id,
    links: state.parts.links
})

export default connect(mapStateToProps, {postLinks})(Input);