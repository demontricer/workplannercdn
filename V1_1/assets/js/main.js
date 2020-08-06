var twstable;
var twkstable;
var wltable;
var nltable;
var mltable;
var rftable;
var tuwltable;
var tumltable;
$(document).ready(function(){
    $("#tws").load("tws.php",function(){
        twstable=$('#ttws').DataTable();
    });    
    $("#twks").load("twks.php",function(){
        twkstable=$('#ttwks').DataTable();
    });    
    $("#wlogs").load("wlogs.php",function(){
        wltable=$('#twlogs').DataTable();
    });    
    $("#nlogs").load("nlogs.php",function(){
        nltable=$('#tnlogs').DataTable();
    });    
    $("#mlogs").load("mlogs.php",function(){
        mltable=$('#tmlogs').DataTable();
    });    
    $("#remain").load("remain.php",function(){
        rftable=$('#tremain').DataTable();
    });    
    $("#uwlogs").load("uwlogs.php",function(){
        tuwltable=$('#tuwlogs').DataTable();
    });    
    $("#umlogs").load("umlogs.php",function(){
        tumltable=$('#tumlogs').DataTable();
    });    
    $('#pwlogs').load("pwlogs.php");
    $('#pmlogs').load("pmlogs.php");
    $("#mbankbal").load("mbankbal.php");
    $("#dashban").load("dashban.php");
    $("#statban").load("statban.php");
    $("#wcat").load("wcat.php");
    function today()
    {
        var ttttd = new Date();
        var ddddd = ttttd.getFullYear()+'-'+(ttttd.getMonth()+1)+'-'+ttttd.getDate();
        return(ddddd);
    }

    $("#nlform").submit(function(event){
        event.preventDefault(); //prevent default action 
        var post_url = $(this).attr("action"); //get form action url
        var form_data = new FormData(document.getElementById("nlform"));
        var oReq = new XMLHttpRequest();
        oReq.open("POST", post_url, true);
        oReq.onload = function(oEvent) 
        {
            if (oReq.status == 200) 
            {
                if(this.responseText=="success")
                {
                    rftable.destroy();
                    $("#remain").load("remain.php",function(){
                        rftable=$('#tremain').DataTable();
                    });    
                    nltable.destroy();
                    $("#nlogs").load("nlogs.php",function(){
                        nltable=$('#tnlogs').DataTable();
                    });                                                           
                    notsuc("Notes Log Added Successfully!!");
                    document.getElementById('nlform').reset();                        
                }
                else
                {
                    rftable.destroy();
                    $("#remain").load("remain.php",function(){
                        rftable=$('#tremain').DataTable();
                    });    
                    nltable.destroy();
                    $("#nlogs").load("nlogs.php",function(){
                        nltable=$('#tnlogs').DataTable();
                    });                                                           
                    noterr(this.responseText);
                }
            } 
            else 
            {
            }
        };
        oReq.send(form_data);
    });
    $("#updatewlog").submit(function(event){
        event.preventDefault(); //prevent default action 
        var form_data = $(this).serialize(); //Encode form elements for submission        
        tuwltable.destroy();
        $('#uwlogs').load("uwlogs.php?"+form_data,function(){
            tuwltable=$('#tuwlogs').DataTable();
        });
        $('#pwlogs').load("pwlogs.php?"+form_data);
    });
    $("#updatemlog").submit(function(event){
        event.preventDefault(); //prevent default action 
        var form_data = $(this).serialize(); //Encode form elements for submission        
        tumltable.destroy();
        $('#umlogs').load("umlogs.php?"+form_data,function(){
            tumltable=$('#tumlogs').DataTable();
        });
        $('#pmlogs').load("pmlogs.php?"+form_data);
    });
    $("#wlform").submit(function(event){
        event.preventDefault(); //prevent default action 
        var post_url = $(this).attr("action"); //get form action url
        var form_data = $(this).serialize(); //Encode form elements for submission        
        $.post( post_url, form_data, function( response ) 
        {
            if(response=="success")
            {
                wltable.destroy();
                $("#wlogs").load("wlogs.php",function(){
                    wltable=$('#twlogs').DataTable();
                });    
                swal("Updated", "Work Log Updated Successfully", "success");
                notsuc("Work Log Added Successfully!!");
                document.getElementById('wlform').reset();
            }
            else
            {
                wltable.destroy();
                $("#wlogs").load("wlogs.php",function(){
                    wltable=$('#twlogs').DataTable();
                });    
                noterr("Sommething Wrong in Server Please Try Again Later");
            }
        });
    });
    $("#mlform").submit(function(event){
        event.preventDefault(); //prevent default action 
        var post_url = $(this).attr("action"); //get form action url
        var form_data = $(this).serialize(); //Encode form elements for submission        
        $.post( post_url, form_data, function( response ) 
        {
            if(response=="success")
            {
                $("#mbankbal").load("mbankbal.php");
                mltable.destroy();
                $("#mlogs").load("mlogs.php",function(){
                    mltable=$('#tmlogs').DataTable();
                });    
                notsuc("Money Log Added Successfully!!");
                swal("Updated", "Money Log Updated Successfully", "success");
                document.getElementById('mlform').reset();
            }
            else
            {
                $("#mbankbal").load("mbankbal.php");
                mltable.destroy();
                $("#mlogs").load("mlogs.php",function(){
                    mltable=$('#tmlogs').DataTable();
                });    
                noterr("Sommething Wrong in Server Please Try Again Later");
            }
        });
    });
    $("#mlbform").submit(function(event){
        event.preventDefault(); //prevent default action 
        var post_url = $(this).attr("action"); //get form action url
        var form_data = $(this).serialize(); //Encode form elements for submission        
        $.post( post_url, form_data, function( response ) 
        {
            if(response=="success")
            {
                $("#mbankbal").load("mbankbal.php");
                mltable.destroy();
                $("#mlogs").load("mlogs.php",function(){
                    mltable=$('#tmlogs').DataTable();
                });    
                notsuc("Money Log Added Successfully!!");
                swal("Updated", "Money Balance Updated Successfully", "success");
                document.getElementById('mlbform').reset();
            }
            else
            {
                mltable.destroy();
                $("#mlogs").load("mlogs.php",function(){
                    mltable=$('#tmlogs').DataTable();
                });    
                noterr("Sommething Wrong in Server Please Try Again Later");
            }
        });
    });
    $( "#addcat" ).click(function() {
        var post_url = "addcategory.php";
        var form_data = "ecat="+document.getElementById("editcat").value; //Encode form elements for submission        
        $.post( post_url, form_data, function( response ) 
        {
            if(response=="success")
            {
                $("#wcat").load("wcat.php");
                notsuc("New Work Category Added Successfully!!");
                swal("Updated", "Category Updated Successfully", "success");
                document.getElementById("editcat").value="";
            }
            else
            {
                noterr("Sommething Wrong in Input Please Check Try Again Later");
            }
        });
    });
    $( "#delcat" ).click(function() {
        var post_url = "delcategory.php";
        var form_data = "ecat="+document.getElementById("editcat").value; //Encode form elements for submission        
        $.post( post_url, form_data, function( response ) 
        {
            if(response=="success")
            {
                $("#wcat").load("wcat.php");
                notsuc("Category Deleted Successfully!!");
                swal("Updated", "Category Deleted Successfully", "success");
                document.getElementById("editcat").value="";
            }
            else
            {
                noterr("Category you specified is not yet created.");
            }
        });
    });

});

  function updatework(str)
  {
    swal("Did you Completed the Work ??", {
        buttons: {
            cancel: "Cancel",
            catch: {
                text: "Completed",
                value: "complete",
            },
            incomplete: {
                text: "Incomplete",
                value: "incomplete"
            },
        },
    })
    .then((value) => {
        switch (value) {
            case "incomplete":
                var post_url = "updateworkstatus.php";
                var form_data = "status=InComplete&wlid="+str;        
                $.post( post_url, form_data, function( response ) 
                {
                    twstable.destroy();
                    twkstable.destroy();
                    $("#tws").load("tws.php",function(){
                        twstable=$('#ttws').DataTable();
                    });    
                    $("#twks").load("twks.php",function(){
                        twkstable=$('#ttwks').DataTable();
                    });                    
                    if(response=="success")
                    {
                        $("#dashban").load("dashban.php");
                        swal("Updated","Work Marked as Incomplete",{icon: "error"});
                    }
                    else
                    {
                        $("#dashban").load("dashban.php");
                        swal("Some Error Occured in Server Please Try Again Later",{icon: "error"});
                    }
                });
                break;
            
            case "complete":
                var post_url = "updateworkstatus.php";
                var form_data = "status=Completed&wlid="+str;        
                $.post( post_url, form_data, function( response ) 
                {
                    twstable.destroy();
                    twkstable.destroy();
                    $("#tws").load("tws.php",function(){
                        twstable=$('#ttws').DataTable();
                    });    
                    $("#twks").load("twks.php",function(){
                        twkstable=$('#ttwks').DataTable();
                    });                    
                    if(response=="success")
                    {
                        $("#dashban").load("dashban.php");
                        swal("Updated", "Work Completed Successfully", "success");
                    }
                    else
                    {
                        $("#dashban").load("dashban.php");
                        swal("Some Error Occured in Server Please Try Again Later",{icon: "error"});
                    }
                });
                swal("Updated", "Work Completed Successfully", "success");
                break;
            
            default:
                swal("Action Interupted by User",{icon: "info"});
        }
    });        
  }

function noterr(mes)
{
    $.notify({
      placement: {
          from: "top",
          align: "center"
      },
        showProgressbar: true,
        icon: 'ti-close',
        message: mes

    },{
        type: 'danger',
        timer: 1000
    });
    swal("Warning", mes, "warning");
    
}
function notsuc(mes)
{

    $.notify({
        icon: 'ti-info',
        message: mes

    },{
        type: 'success',
        timer: 1000
    });
    swal("Success", mes, "success");

}