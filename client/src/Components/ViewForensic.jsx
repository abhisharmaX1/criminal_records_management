//import React, { Component } from 'react';
import ViewCaseNav from './Navbar/ViewForensic.jsx'
import CrimeScenePhotographs from './CrimeScenePhotographs';

//import SimpleStorageContract from "../contracts/ForensicContract.json";
//import getWeb3 from "../utils/getWeb3";

//import ipfs from '../ipfs';

import React, { useState, useEffect } from "react";

function ViewForensic(props) {
  const [ipfsHash, setIpfsHash] = useState("");
  const [buffer, setBuffer] = useState(null);
  const [prodId, setProdId] = useState("");
  const [prodStatus, setProdStatus] = useState("");
  const [authority, setAuthority] = useState("");
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [contract, setContract] = useState(null);
  const [case_id, setCaseId] = useState("");
  const [exhibit_name, setExhibitName] = useState("");
  const [desc, setDesc] = useState("");
  const [timestamp, setTimestamp] = useState("");

      /*useEffect(async () => {
        try {
          // Get network provider and web3 instance.
          const web3 = await getWeb3();           
          // Use web3 to get the user's accounts.
          const accounts = await web3.eth.getAccounts();      
    
          // Get the contract instance.
          const networkId = await web3.eth.net.getId();
          const deployedNetwork = SimpleStorageContract.networks[networkId];
          const instance = new web3.eth.Contract(
            SimpleStorageContract.abi,
            deployedNetwork && deployedNetwork.address,
          );
          console.log(deployedNetwork.address);    
          // Set web3, accounts, and contract to the state, and then proceed with an
          // example of interacting with the contract's methods.
          setWeb3(web3);
          setAccounts(accounts);
          setContract(instance);
          runExample();
          onGetDate();
        } catch (error) {
          // Catch any errors for any of the above operations.
          alert(
            `Failed to load web3, accounts, or contract. Check console for details.`,
          );
          console.error(error);
        }
      }, []);*/
    
    
      const captureFile = (event) => {
        event.preventDefault();
        const file = event.target.files[0];
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = () => {
          setBuffer(Buffer(reader.result));
          console.log('buffer', buffer);
        };
      };
      
    
          const onSubmit = (event) => {
          /* event.preventDefault();
            ipfs.files.add(buffer, (error, result) => {
              if(error) 
              {
                console.error(error);
                return;
              }
              contract.methods.addReport(case_id, exhibit_name, desc, timestamp, result[0].hash).send({ from: accounts[0] });
            });        */
          };
        
    
          const getVal = async () => {
            // Get the value from the contract to prove it worked.
            
            const response = await contract.methods.get().call();
        
            // Update state with the result.
            setIpfsHash(response);
        
            console.log("ipfsHash: " + ipfsHash);    
          };

         

          const getImg = async () => {
            // Get the value from the contract to prove it worked.
            const response = await contract.methods.get().call();
        
            // Update state with the result.
            setIpfsHash(response);
        
            const url = "https://ipfs.io/ipfs/"+ipfsHash;
        
            window.location = url;
          };
       

          const runExample = async () => {
            // Stores a given value, 5 by default.
            await contract.methods.set(5).send({ from: accounts[0] });
            // Get the value from the contract to prove it worked.
            const response = await contract.methods.get().call();
            // Update state with the result.
            setIpfsHash(response);
            console.log('ipfsHash: ' + ipfsHash);
          };

          const onGetDate = () => {
            const date = new Date();
            const year = date.getFullYear().toString();
            const month = (date.getMonth() + 101).toString().substring(1);
            const day = (date.getDate() + 100).toString().substring(1);
            const hour = (date.getHours() + 100).toString().substring(1);
            const mins = (date.getMinutes() + 100).toString().substring(1);
            const sec = (date.getSeconds() + 100).toString().substring(1);
            setTimestamp(year + "-" + month + "-" + day + " " + hour + ":" + mins + ":" + sec);
          };

          const crimeId = props.routeParams.caseId;
          
          return (
            <div>
              <ViewCaseNav crimeId={crimeId} />
              <h4  className="title-styled" style={{ marginTop: "40px",  marginLeft: "235px", marginBottom: "25px"  }}>
                Upload Forensic Reports</h4>
      <div className="container">
      <form onSubmit={onSubmit} id="donateForm" className="donate-form">
        <div className="row">
          <div className="col-sm-4">
            <div className="form-group required">
              <label htmlFor="report_type">CASE ID</label>
              <input
                  className="form-control"
                  readOnly
                  value={crimeId}
                  type="text"
                  id="case_id"
                  name="case_id"
                  placeholder="Enter product id"
                  onChange={(evt) => {
                    setProdId(evt.target.value);
                  }}
                  required  />
                   </div>
            </div>
          </div>

           <div className="row">
            <div className="col-sm-8">
              <div className="form-group required">
                <label htmlFor="company">EXHIBIT NAME - CODE</label>
                <input
                  className="form-control"
                  type="text"
                  id="exhibit_name"
                  name="exhibit_name"
                  placeholder="Type and code of uploaded exhibit."
                  onChange={(evt) => {
                    setProdStatus(evt.target.value);
                  }}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-8">
              <div className="form-group required">
                <label htmlFor="par_rem">DESCRIPTION</label>
                <input
                  className="form-control"
                  type="text"
                  id="desc"
                  name="desc"
                  placeholder="One line description"
                  onChange={(evt) => {
                    setAuthority(evt.target.value);
                  }}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-8">
              <div className="form-group required">
                <label htmlFor="payment">
                  Documents (upload in .zip or .rar format)
                </label>
                <input
                  className="form-control"
                  type="file"
                  accept="application/zip,application/x-zip,application/x-zip-compressed,application/octet-stream"
                  onChange={captureFile}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-4">
              <div className="form-group required">
                <label htmlFor="fee">TIMESTAMP</label>
                <input
                  value={timestamp}
                  className="form-control"
                  readOnly
                  type="text"
                  id="timestamp" 
                  name="timestamp"
                  onChange={(evt) => {
                    setTimestamp(evt.target.value);
                  }}
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-submit">
                        <button type="submit" className="dropbtn1" style={{marginTop:"10px"}}>Upload to Blockchain</button>  
                    </div>                                                                                     
            </form>     
            </div>
            </div>
        )

    }
    export default ViewForensic;


   /* render()
    {
        var crimeId = this.props.routeParams.caseId;
        console.log(this.props);
        return(
            <div>
            <ViewCaseNav crimeId = {crimeId}/>
            <h4 className="title-styled" style={{marginTop: "40px", marginLeft: "235px", marginBottom:"25px"}}>Upload Forensic Reports</h4>
            <div className="container">
            <form onSubmit={this.onSubmit} id="donateForm" className="donate-form">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="form-group required">
                            <label for="report_type">CASE ID</label>
                            <input className="form-control" readOnly value = {crimeId} type="text" id="case_id" name="case_id" 
                            placeholder="Enter product id" onChange={(evt) => { this.state.prod_id =  evt.target.value; }} required />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-8">
                        <div className="form-group required">
                            <label for="company">EXHIBIT NAME - CODE</label> 
                            <input className="form-control" type="text" id="exhibit_name" name="exhibit_name" 
                            placeholder="Type and code of uploaded exhibit." onChange={(evt) => { this.state.prod_status =  evt.target.value; }}
                             required />
                        </div>
                    </div>                    
                </div>

                <div className="row">
                    <div className="col-sm-8">
                        <div className="form-group required">
                            <label for="par_rem">DESCRIPTION</label>
                            <input className="form-control" type="text" id="desc" name="desc" 
                            placeholder="One line description" onChange={(evt) => { this.state.authority =  evt.target.value; }} required />                                    
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-8">
                        <div className="form-group required">
                            <label for="payment">Documents (upload in .zip or .rar format)</label>
                            <input className="form-control" type="file" accept="application/zip,application/x-zip,application/x-zip-compressed,
                            application/octet-stream" onChange={this.captureFile}/>
                         </div>
                    </div>   
                </div>

                <div className="row">
                    <div className="col-sm-4">
                        <div className="form-group required">
                            <label for="fee">TIMESTAMP</label>
                            <input value={this.state.timestamp} className="form-control" readOnly type="text" id="timestamp" 
                            name="timestamp" onChange={(evt) => { this.state.timestamp =  evt.target.value; }} placeholder="2019-08-03 20:45"
                             required />
                        </div>
                    </div>                                                              
                    <div className="form-submit">
                        <button type="submit" className="dropbtn1" style={{marginTop:"10px"}}>Upload to Blockchain</button>  
                    </div>   
                </div>                                                                                   
            </form>     
            </div>
            </div>
        )

    }
}

export default ViewForensic;*/


/*class ViewForensic extends Component 
{
    state = {ipfsHash: '', buffer: null, web3: null, accounts: null, contract: null,
               case_id: '',
               exhibit_name: '',
               desc:'',
               timestamp:''
      }; */

      /*constructor(props)
      {
        super(props);
        this.captureFile = this.captureFile.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }*/

       /* componentDidMount = async () => {
        try {
          // Get network provider and web3 instance.
          const web3 = await getWeb3();           
          // Use web3 to get the user's accounts.
          const accounts = await web3.eth.getAccounts();      
    
          // Get the contract instance.
          const networkId = await web3.eth.net.getId();
          const deployedNetwork = SimpleStorageContract.networks[networkId];
          const instance = new web3.eth.Contract(
            SimpleStorageContract.abi,
            deployedNetwork && deployedNetwork.address,
          );
          console.log(deployedNetwork.address);    
          // Set web3, accounts, and contract to the state, and then proceed with an
          // example of interacting with the contract's methods.
          this.setState({ web3, accounts, contract: instance }, this.runExample);
          this.onGetDate();
        } catch (error) {
          // Catch any errors for any of the above operations.
          alert(
            `Failed to load web3, accounts, or contract. Check console for details.`,
          );
          console.error(error);
        }
      };*/

       /* captureFile(event) {
            event.preventDefault()
            const file = event.target.files[0]
            const reader = new window.FileReader()
            reader.readAsArrayBuffer(file)
            reader.onloadend = () => {
              this.setState({ buffer: Buffer(reader.result) })
              console.log('buffer', this.state.buffer)
            }
          }*/

          /*  onSubmit(event) {
            const { accounts, contract } = this.state;
            event.preventDefault()
            ipfs.files.add(this.state.buffer, (error, result) => {
            if(error) 
            {
                console.error(error)
                return
            }
            contract.methods.addReport(this.state.case_id, this.state.exhibit_name, this.state.desc, this.state.timestamp, result[0].hash).send({ from: accounts[0] });
    
            })        
          }*/

          /*getVal = async () => {
            const { accounts, contract } = this.state;
    
            // Get the value from the contract to prove it worked.
            const response = await contract.methods.get().call();
    
            // Update state with the result.
            this.setState({ ipfsHash: response });
    
             console.log("ipfsHash: " + this.state.ipfsHash);    
          };*/

           
        /* getImg = async () => {
            const { accounts, contract } = this.state;
    
            // Get the value from the contract to prove it worked.
            const response = await contract.methods.get().call();
    
            // Update state with the result.
            this.setState({ ipfsHash: response });
    
            var url = "https://ipfs.io/ipfs/"+this.state.ipfsHash;
    
            window.location = url;
          };*/

          /*onGetDate() {
        var date = new Date();
        var year = date.getFullYear().toString();
        var month = (date.getMonth() + 101).toString().substring(1);
        var day = (date.getDate() + 100).toString().substring(1);
        var hour = (date.getHours() + 100).toString().substring(1); 
        var mins = (date.getMinutes() + 100).toString().substring(1);
        var sec = (date.getSeconds() + 100).toString().substring(1);    
        this.setState({
            timestamp : year + "-" + month + "-" + day + " " + hour + ":" + mins + ":" + sec
        });
        // console.log(year + "-" + month + "-" + day + " " + hour + ":" + mins + ":" + sec);
      }*/
    