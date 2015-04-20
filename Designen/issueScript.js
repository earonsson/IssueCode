/**
 * Created by Elias on 2015-04-07.
 */
$(document).ready(function(){

    $("#1").click(function(){

        $('#issueList').fadeToggle('fast');
        clearTable();
        $("#map").css("height", "88%");
        //printIssueList(listOverAreas);
    });

    $("#2").click(function(){

        $('#issueList').fadeToggle('fast');

        clearTable();
        printIssueList(listOverIssues, "Fålhagen", "Category", "Address");
        

    });

/*    $("#3").hover(
        function(){
            $(".child-3").show("slow");
        },
        function(){
            stillDisplay();
        }
    );

    function stillDisplay(){
        if(!$(".child-3").mouseover()){
            console.log("h");
        }
        else {
            console.log("g");
            $(".child-3").hide("slow");
        }
    };*/

    $("#falhagen").click(function(){
        $('#issueList').show('fast');
        clearTable();
        $("#map").css("height", "55%");
        printIssueList(listOverAreas, "Fålhagen", "Address", "Category");
    });

    $('tr.header').click(function(){
            $(this).siblings('.child-'+this.id).toggle('fast');
        });

    $("tr[class^=child-]").hide().children('tr');


    function printIssueList(list, x, y, z){
    

        tr = $("<tr></tr>");
        td = $("<td></td>").text(x).attr("colspan", "4").attr("style","text-align: center");
        tr.append(td);
        $(".infoLista").append(tr);
        tr = $("<tr></tr>");
        td = $("<td></td>").text(y).attr("style","text-align: center");
        tr.append(td);
        td = $("<td></td>").text(z).attr("style","text-align: center");
        tr.append(td);
        $(".infoLista").append(tr);
        td = $("<td></td>").text("Beskrivning").attr("style","text-align: center");
        tr.append(td);
        $(".infoLista").append(tr);
        td = $("<td></td>").text("Status").attr("style","text-align: center");
        tr.append(td);
        $(".infoLista").append(tr);

        for (i=0; i<list.length; i++){
            if(i%3===0) {

                tr = $("<tr></tr>");
            }
            td = $("<td></td>").text(list[i]);
            tr.append(td);
            $(".infoLista").append(tr);
        }
        
        addColumn();
        
    }

    function addColumn(){

        for (i=2; i < $(".infoLista tr").length; i++){
            var button = $("<button>Mottagen</button>");
            button.css("background-color", "red");
            button.click(function(){$(this).css("background-color", "green")});
            var button1 = $("<button>Processing</button>");
            button1.css("background-color", "red");
            button1.click(function(){$(this).css("background-color", "green")});
            var button2 = $("<button>Klar</button>");
            button2.css("background-color", "red");
            button2.click(function(){$(this).css("background-color", "green")});
            td = $("<td></td>").append(button).append(button1).append(button2);
            $(".infoLista tr:eq("+i+")").append(td);
        }
        //alert("bajs");
    }

    function clearTable(){
        while ($(".infoLista tr").length > 0) {
            $(".infoLista tr:last").remove();
        }
        $("#map").css("height", "88%");
    }


    var tr, td;
    var listOverIssues = ["Belysning", "Fålhagen", "Blabla här händer det grejer som förklarar lite olika fenomen i livet exempelvis hur vi ska leva vårt liv",
     "Gator", "Stenhagen", "Beskrivning", "Soptunnor", "Kåbo", "Beskrivning", "Vatten", "Ekeby", "Beskrivning"];
    var listOverAreas = ["Belysning", "Fålhagen", "Beskrivning", "Gator", "Stenhagen", "Beskrivning", "Soptunnor", "Kåbo", "Beskrivning", "Vatten", "Ekeby", "Beskrivning", "Bajs", "Bajs", "Beskrivning"];
    
});




