let lastIn = 0;
var prodData = [
	{
		'id': 'pd1',
		'prdHdr': 'Electronic Goods',
		'price': 799,
		'cate':'bks',
	},
	{
		'id': 'pd2',
		'prdHdr': ' Goods',
		'price': 79,
		'cate':'bgs',
	},
	{
		'id': 'pd3',
		'prdHdr': 'Electronic ',
		'price': 99,
		'cate':'tsh',
	},
	{
		'id': 'pd4',
		'prdHdr': 'Electro Goods',
		'price': 169,
		'cate':'mic',
	},
	{
		'id': 'pd5',
		'prdHdr': 'Elec Goods',
		'price': 199,
		'cate':'tsh',
	},
	{
		'id': 'pd6',
		'prdHdr': 'Elec Goods',
		'price': 299,
		'cate':'bgs',
	},
	{
		'id': 'pd7',
		'prdHdr': 'Electronic Goods',
		'price': 399,
		'cate':'mic',
	},
	{
		'id': 'pd8',
		'prdHdr': 'Electronic Goods',
		'price': 499,
		'cate':'bks',
	},
	{
		'id': 'pd9',
		'prdHdr': 'Electronic Goods',
		'price': 599,
		'cate':'mic',
	},
	{
		'id': 'pd10',
		'prdHdr': 'Electronic Goods',
		'price': 699,
		'cate':'bgs',
	}, {
		'id': 'pd11',
		'prdHdr': 'Electronic Goods',
		'price': 799,
		'cate':'tsh',
	},
	{
		'id': 'pd12',
		'prdHdr': 'Electronic Goods',
		'price': 899,
		'cate':'tsh',
	},
	{
		'id': 'pd13',
		'prdHdr': 'Electronic Goods',
		'price': 199,
		'cate':'bks',
	},
	{
		'id': 'pd14',
		'prdHdr': 'Electronic Goods',
		'price': 299,
		'cate':'bgs',
	},
	{
		'id': 'pd15',
		'prdHdr': 'Electronic Goods',
		'price': 399,
		'cate':'mic',
	},
	{
		'id': 'pd16',
		'prdHdr': 'Electronic Goods',
		'price': 499,
		'cate':'tsh',
	},
	{
		'id': 'pd17',
		'prdHdr': 'Electronic Goods',
		'price': 599,
		'cate':'mic',
	},
	{
		'id': 'pd18',
		'prdHdr': 'Electronic Goods',
		'price': 699,
		'cate':'bks',
	},
	{
		'id': 'pd19',
		'prdHdr': 'Electronic Goods',
		'price': 799,
		'cate':'tsh',
	},
	{
		'id': 'pd20',
		'prdHdr': 'Electronic Goods',
		'price': 789,
		'cate':'bgs',
	},
	{
		'id': 'pd21',
		'prdHdr': 'Electronic Goods',
		'price': 79,
		'cate':'tsh',
	},
	{
		'id': 'pd22',
		'prdHdr': 'Electronic Goods',
		'price': 99,
		'cate':'mic',
	},
	{
		'id': 'pd23',
		'prdHdr': 'Electronic Goods',
		'price': 109,
		'cate':'tsh',
	},
	{
		'id': 'pd24',
		'prdHdr': 'Electronic Goods',
		'price': 792,
		'cate':'bgs',
	},
	{
		'id': 'pd25',
		'prdHdr': 'Electronic Goods',
		'price': 729,
		'cate':'tsh',
	},
	{
		'id': 'pd26',
		'prdHdr': 'Electronic Goods',
		'price': 799,
		'cate':'bks',
	},
	{
		'id': 'pd27',
		'prdHdr': 'Electronic Goods',
		'price': 799,
		'cate':'bgs',
	}
]
var dumData = prodData;
var filterData = [];
var slider = document.getElementById("myRange");
var prePopid;

$(document).ready(function () {
	mainDefaultcall()
	$(".selSort").change(function(){
		if($(this).val()=="highPrice"){
			dumData.sort(function(a, b){
				return b.price-a.price
			});
			mainDefaultcall()
		}
		else if($(this).val()=="lowPrice"){
			dumData.sort(function(a, b){
				return a.price-b.price
			});
			mainDefaultcall()
		}
		else{
			dumData=prodData;
		}
	});
});


function mainDefaultcall(pgNumber) {
	$('.cardsCont').html('');
	var j = 9;
	var i = 0;
	var k=0;
	var len = dumData.length;
	if (pgNumber !== undefined) {
			j=j*pgNumber;
			i=i+(9*pgNumber)-9
	}
	if(j>len){
		j=len;
	}
	if(i==0){
		k=i+1
	}
	$('#crntShown').text(" "+k+' - '+j+' of '+len+" ")
	for (i; i < j; i++) {
		$('.cardsCont').append("<div class='diviDers col-lg-4 col-md-4 col-sm-4' id='" + dumData[i].id + "'" + "></div>")
		$('#' + dumData[i].id).append('<div class="prodCards" onclick="callths(this.id)" data-toggle="modal" data-target="#myProd" id="'+dumData[i].id+'"'+' ></div>')
		$('#' + dumData[i].id + ' .prodCards').append('<div class="saleBan">Sale !</div>')
		$('#' + dumData[i].id + ' .prodCards').append('<div class="topImg"><div>')
		$('#' + dumData[i].id + ' .topImg').append('<img src="' + 'assets/imgs.jpg' + '" alt="">')
		$('#' + dumData[i].id + ' .prodCards').append('<div class="btmTxt"><div>')
		$('#' + dumData[i].id + ' .btmTxt').append('<p class="prdHdr"> ' + dumData[i].prdHdr + '</p>')
		$('#' + dumData[i].id + ' .btmTxt').append('<p class="prdSubhdr"></p>')
		$('#' + dumData[i].id + ' .prdSubhdr').append('<span class="prcCut">' + '$999' + '</span> $' + dumData[i].price);
	}

}

$('.pagination a').click(function () {
	var dataTarget = $(this).attr('data-target')
	$('.pagination .pgNum.active').removeClass('active')
	$(this).addClass('active');
	//$('.pagination').find('.pgNum.active').prev().removeClass('active')
	mainDefaultcall(dataTarget)
})

$('.next').click(function () {
	// console.log($('.pagination').find('.pgNum.active').next())
	$('.pagination').find('.pgNum.active').next().addClass('active')
	$('.pagination').find('.pgNum.active').prev().removeClass('active')
})

slider.oninput = function () {
	$('#prcVal').text(this.value + ' - ' + '$999')
	var minPrice = this.value;
	filterData = prodData.filter(prds => prds.price > minPrice)
	dumData = filterData;
	mainDefaultcall();
}

window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
		var priced = document.forms["prdForm"]['prices'].value;
		var proNa = document.forms["prdForm"]['pdnames'].value;
		var proCa = document.forms["prdForm"]['prodCate'].value
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
		}
		else{
			event.preventDefault();
			if(prePopid!==undefined){
				prodData.find((w)=>{
					if(w.id==prePopid){
						w.price=priced;
						w.cate=proCa;
						w.prdHdr=proNa;
					}
				})
			}
			else{
				var newlen=prodData.length;
				var newDat={
					'id':prodData[newlen-1].id,
					'prdHdr':proNa,
					'price':priced ,
					'cate':proCa,
				}
				prodData.push(newDat)
			}	
		}
        form.classList.add('was-validated');
      }, false);
    });
  }, false);

  $('#buton').click(function(){
	$('#files').click();
	event.preventDefault();
});

	function callths(eve){
		var clck=prodData.find(e=>{
			if(e.id==eve){
				return e;
			}
		});
		$('#pdname').val(clck.prdHdr);
		$('#price').val(clck.price);
		$('#sel1').val(clck.cate);
		prePopid=clck.id
	}
	$('.cates').click(function(){
		var selCat=$(this).attr('data-target');
		var catelist=[];
		prodData.find(ev=>{
			if(ev.cate==selCat){
				catelist.push(ev);
			}
		});
		dumData=catelist;
		mainDefaultcall();
	})

	$('.addProduct').click(function(){
		prePopid=undefined;
	})
