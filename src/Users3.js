

    const items = ["Mango" , "Apple" , "Banana" , "Orange" , "Strawberry" ];
 
    function MyList() {
      const listItems = items.map((item, index) =>
        
        <li key={index}>{item}</li>
      );
      return <ul>{listItems}</ul>;
    }

    export default MyList;



