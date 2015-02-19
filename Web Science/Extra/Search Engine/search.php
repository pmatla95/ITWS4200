<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Search Engine - search</title>
  </head>
  <body>
      <h2> Search Engine </h2>
      <form action='./search.php' method='get'>
        <!--the echo $_GET is to keep the search values in the text box -->
        <input type='text' name='k' size='50' value='<?php echo $_GET['k']; ?>' />
        <input type='submit' value='Search' />
      </form>
      <hr />
      <?php
         $k = $_GET['k'];

         $terms = explode(" ", $k);
         //we are going to select from the query..
         $query = "SELECT * FROM search WHERE ";
         $i = 0;
         foreach ($terms as $each){
            $i++;

            if ($i == 1) 
              //each instance of the search
              $query .= "keywords LIKE '%$each%' ";
            else
              $query .= "OR keywords LIKE '%$each%' ";
         }


        //connect to the database
        mysql_connect("localhost", "root", "Rensselaer");
        mysql_select_db("test");

        $query = mysql_query($query);
        $numrows = mysql_num_rows($query); 
        //take query and tell you how many rows that are found with positive data
        if ($numrows > 0) { //if we find results
          while ($row = mysql_fetch_assoc($query)) { //fetch_assoc will create array and get all info about items found in db

            //gathering the information from the matched results
            $id = $row['id'];
            $title = $row['title'];
            $description = $row['description'];
            $keywords = $row['keywords'];
            $link = $row['link'];


            //format for displaying the results
            echo "<h2><a href='$link'>$title</a></h2>
            $description<br /><br />";

          }
        }
        else
          echo "No results found for \"<b>$k</b>\"";

        //disconnect from db
        mysql_close();

      ?>

  </body>
</html>
