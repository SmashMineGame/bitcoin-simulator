<?php
    include ('header.php');
    
    if ($_GET['page'] === "business-simulator"){
        include('business-simulator/business-simulator.php');
    }else{
        include ('home.php');
    }
    
    include ('footer.php');
?>
