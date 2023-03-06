
function go(e){
    const numRow = 7;
    const numCol = 10
    let textInput = document.getElementById('text');
    let textArray = [...textInput.value].sort((a,b) => 0.5 - Math.random());
    let chatPerTable = document.getElementById('number').value;
    let range = document.createRange();
    let tables = document.createElement("div");
    for(let i = 0; i < textArray.length; i += chatPerTable){
        let tableContent = textArray.slice(i, i + chatPerTable);
        let inputForTable = [];
        for(let j = 0; j < numRow; j ++){
            inputForTable.push(tableContent)
        }      
        
        tables.appendChild(createTable(inputForTable));
        
    }

    document.body.appendChild(tables);
    //copy to clipboard
    range.selectNode(tables);
    window.getSelection().removeAllRanges()
    window.getSelection().addRange(range);
    
    document.execCommand('copy');
    console.log(range);

    alert("生成的指读表格已经复制到剪贴板，可以粘贴到word里面坐进一步调整。建议：1，采用landscape orientation，边距为narrow；2，行高设为0.9 inch，列宽设为0.9 inch；3，board and shading设为all");




    // for(let i = 0; i < numRow * numCol; i++){
    //     if(textArray.length >= numCol * numRow){
    //         textArray = textArray.slice(0, 70)
    //         break;
    //     }else{
    //         textArray = textArray.concat(textArray.sort((a,b) => 0.7 - Math.random()));
    //     }
    // }
    // let newArray = [];
    // while(textArray.length){
    //     newArray.push(textArray.splice(0, 10))
    // }
    // let tableDiv = createTable(newArray);


    // //copy to clipboard
    // document.body.appendChild(tableDiv);
    // let range = document.createRange();
    // range.selectNode(tableDiv);
    // window.getSelection().removeAllRanges()
    // window.getSelection().addRange(range);
    
    // document.execCommand('copy');
    // console.log(range);

    // alert("生成的指读表格已经复制到剪贴板，可以粘贴到word里面坐进一步调整。建议：1，采用landscape orientation，边距为narrow；2，行高设为0.9 inch，列宽设为0.9 inch；3，board and shading设为all");

}

function createTable(array){
    if(!Array.isArray(array[0])){
        console.log('input is not 2d array');
        return;
    }

    let tableInner = ""
    for(let i = 0; i < array.length; i ++){
        let tmpArray = array[i].sort((a,b) => 0.4 - Math.random());
        tableInner += "<tr>";
        for(let j = 0; j < array[i].length; j ++){
            tableInner += "<td>" + tmpArray[j] + "</td>";
        }
        tableInner += "</tr>";
    }

    

    let table = document.createElement('table');
    table.innerHTML = tableInner;

    return table;

}
