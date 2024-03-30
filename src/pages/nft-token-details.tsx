

import Widget from "../components/widget/Widget";
import Featured from "../components/featured/Featured";
import Chart from "../components/chart/Chart";
import Table from "../components/table/Table";

const NftTokenDetails = () => {
  return (
   
    <div className="home container-lg">
    
    <div className="launchpad-top-second" style={{marginLeft:"30px",}}>
    <h6 className="launchpad-title">
      <span style={{color:"#c3976a"}}>NFT TOKEN </span>
    </h6>
    <h2 className="launchpad-description">NFT TOKEN DETAILS PAGE</h2>
  
  </div>
       
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
      <div style={{flex: 4}}>
      <Featured />
      </div>
        <div style={{flex: 8}}>
        <Chart title="Last 6 Months (Revenue)" aspect={2 / 1}  />
        </div>
        </div>
        <div className="listContainer">
          <div className="listTitle">Top Tokens</div>
          <Table />
        </div>
        <div className="listContainer">
          <div className="listTitle">Top Tokens</div>
          <Table />
        </div>
        <div className="listContainer">
          <div className="listTitle">Top Tokens</div>
          <Table />
        </div>
      </div>
 
  );
};

export default NftTokenDetails;
