

<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="style.css" />
<script type="text/javascript" src="script.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>
</head>
<body>
<!-- top menu -->
<div class="TopMenu">
  <div class="logo"></div>
  <div class="user">hello user</div>
</div>

<!-- payment -->
<div class="payment">
  <div onclick="open_wind()" id="add" class="AddPayment">
    <div class="AddPhoto"></div>
    <div  class="PayText">ADD  PAYMENT</div>
  </div>
  <div class="FilterSearch">
    <div class="search">
      <div class="SearchPhoto" onclick="filtersearch()"></div>
      <input id="searchID" class="SearchEdit" type="text" name="" placeholder="filter by eny property...">
    </div>
    <div class="filter">
      <button onclick="show_filter()" class="ExsButton">exstended filters</button>
    </div>
  </div>
</div>

<div id="base" class="filters" style="display: none;">
  <div class="category">
    <div class="tittle">filler by category</div>
    <button class="filtrButton" onclick="category('mobile services')">mobile services</button>
    <button class="filtrButton" onclick="category('gasoline')">gasoline</button>
    <button class="filtrButton" onclick="category('food')">food</button>
    <button class="filtrButton" onclick="category('charity')">charity</button>
    <button class="filtrButton" onclick="category('transporn')">transporn</button>
  </div>
  <div class="date">
    <div class="tittle">filler by date</div>
    <input id="datefrom" class="filterEdit" type="date" name="" placeholder="from">
    <input id="dateto" class="filterEdit" type="date" name="" placeholder="to">
  </div>
  <div class="amount">
    <div class="tittle">filler by amount</div>
    <input id="from" class="filterEdit" type="text" name="" placeholder="from">
    <input id="to" class="filterEdit" type="text" name="" placeholder="to">
  </div>
</div>

<div class="paymentRecord">
  <div class="record" >
  <div class="paymentlist" id="record_id">
    <script type="text/javascript">index("food");</script>
  </div>
    <div class="total">
      <div class="totalTittle">Total:</div>
      <div id='payid' class="totalpey" >83.60</div>
    </div>
  </div>
  <div class="chart">
    <div class="chartMonth"><canvas id="bar-chart" width="500" height="250"></canvas></div>
    <div class="chartCategory"><canvas id="bar-chart_one"  width="500" height="250"></canvas></div>
  </div>
</div>


<script>
new Chart(document.getElementById("bar-chart"),{
    type: 'bar',
    data: {
      labels: ["jan", "Feb", "mar", "Apr", "may","iun","iul","evg","sef","oqt","nov","dec"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#3e95cd","#3e95cd","#3e95cd","#3e95cd","#3e95cd","#3e95cd","#3e95cd","#3e95cd","#3e95cd","#3e95cd","#3e95cd",],
          data: [28,27,74,74,43,85,96,48,76,86,152]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Peyment pey manth'
      }
    }
});

new Chart(document.getElementById("bar-chart_one"),{
    type: 'bar',
    data: {
      labels: ["jan", "Feb", "mar", "Apr", "may","iun","iul","evg","sef","oqt","nov","dec"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#3e95cd","#3e95cd","#3e95cd","#3e95cd","#3e95cd","#3e95cd","#3e95cd","#3e95cd","#3e95cd","#3e95cd","#3e95cd",],
          data: [28,27,74,74,43,85,96,48,76,86,152]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Peyment pey manth'
      }
    }
});
</script>


<div id="myModal" class="modal">
  <div class="modal_content">
    <span onclick="close_wind()" class="close">&times;</span>
    <div class="popaptitle">ADD NEW PAYMENT</div>
    <div class="PaymentAmount">
        <div class="some">
        <div class="tittlepopap">Tittle:</div>
        <input id="same_payment" class="INPpay" type="" name="" placeholder="some payment" required>
      </div>
      <div class="Amount">
        <div class="tittlepopap">amount:</div>
        <input id="amount" class="INPamount" type="" name="" required>
      </div>
      <div>
        <div class="tittlepopap">Category:</div>
        <select id="categoryID" class="SELCategory" required>
          <option></option>
          <option>mobile services</option>
          <option>gasoline</option>
          <option>food</option>
          <option>charity</option>
          <option>transporn</option>
        </select>

        <div class="tittlepopap">Date:</div>
        <input id="dateID" class="SELCategory" type="date" id="myDate" value="" required>

        <div class="tittlepopap">coment:</div>
        <textarea id="textID" class="textare"></textarea>
        <input class="creat" type="submit" name="" value="CREATE" onclick="add()">
      </div>
    </div>
  </div>
</div>

<div class="bottommenu">
  <div class="bottomTittle">
    <div class="year">2017</div>
    <div class="text">payment menejment</div>
  </div>
</div>
</body>
</html>

