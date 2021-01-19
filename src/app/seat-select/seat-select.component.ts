import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Passenger } from '../app-model/Passenger';
import { Seat } from '../app-model/Seat';
import { UserService } from '../user.service';

@Component({
  selector: 'app-seat-select',
  templateUrl: './seat-select.component.html',
  styleUrls: ['./seat-select.component.scss']
})
export class SeatSelectComponent implements OnInit {
  passenger: Passenger = new Passenger();
  seat: Seat = new Seat();
  //public passenger = [];

  

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {

    this.seatConfig = [
      {
        "seat_price": 5000,
        "seat_map": [
          {
            "layout": "g_____"
          },
          {
            "layout": "gg__gg"
          },
          {
            "layout": "gg__gg"
          },
          {
            "layout": "gg__gg"
          },
          {
            "layout": "gg__gg"
          },
          {
            "layout": "gg__gg"
          },
          {
            "layout": "gg__gg"
          },
          {
            "layout": "gggggg"
          }
        ]
      }
    ]
    this.processSeatChart(this.seatConfig);
  }


  proceedToBook($event: any,id: any){
    //var obj = {};
    //this.passenger.push(JSON.stringify(obj));
    //console.log(this.passenger);
    console.log(id);
    this.passenger.seat.seatId=id;
    this.AddBooking();
  }



  AddBooking() {
    // this.userService.addBooking(this.passenger).subscribe(
    //   () => {
        //console.log(this.CustomerID);
        //this.passenger.CustomerID=this.CustomerID;
        console.log(this.passenger);
        sessionStorage.setItem('passengerName', this.passenger.passengerName );
        sessionStorage.setItem('passengerAge', String(this.passenger.passengerAge) );
        sessionStorage.setItem('seatId', String(this.passenger.seat.seatId) );
        // this.router.navigate(['/list']);
        this.router.navigateByUrl('payments');
      //}
   // );
  }





  
  // saveSeatbooking(seat: Seat): void {
  //   this.seat = seat;
  //   console.log(this.passenger);

  //   // console.log(this.seat);
  //   // console.log(seat);
  //   this.AddBooking();
  // }




  private seatConfig: any = null;
  public seatmap = [];

  private seatChartConfig = {
    showRowsLabel: false,
    showRowWisePricing: false,
    newSeatNoForRow: false
  }

  public cart = {
    selectedSeats: [],
    seatstoStore: [],
    totalamount: 0,
    cartId: "",
    eventId: 0
  };


  public processSeatChart(map_data: any[]) {

    if (map_data.length > 0) {
      var seatNoCounter = 1;
      for (let __counter = 0; __counter < map_data.length; __counter++) {
        var row_label = "";
        var item_map = map_data[__counter].seat_map;

        //Get the label name and price
        row_label = item_map[0] + " - ";
        if (item_map[item_map.length - 1] != " ") {
          // row_label += item_map[ item_map.length - 1];
          map_data[__counter].seat_price = map_data[__counter].seat_price;

        }
        else {
          row_label += item_map[item_map.length - 2];
        }
        row_label += " : Rs. " + map_data[__counter].seat_price;

        item_map.forEach(map_element => {
          var mapObj = {
            "seatRowLabel": map_element,
            "seats": [],
            "seatPricingInformation": row_label
          };
          row_label = "";
          var seatValArr = map_element.layout.split('');
          if (this.seatChartConfig.newSeatNoForRow) {
            seatNoCounter = 1; //Reset the seat label counter for new row
          }
          var totalItemCounter = 1;
          seatValArr.forEach(item => {
            var seatObj = {
              "price": map_data[__counter]["seat_price"],
              "status": "available"
            };

            if (item != '_') {
              seatObj["seatLabel"] = seatNoCounter;
              if (seatNoCounter < 10) { seatObj["seatNo"] = "0" + seatNoCounter; }
              else { seatObj["seatNo"] = "" + seatNoCounter; }

              seatNoCounter++;
            }
            else {
              seatObj["seatLabel"] = "";
            }
            totalItemCounter++;
            mapObj["seats"].push(seatObj);
          });
          console.log(" \n\n\n Seat Objects ", mapObj);
          this.seatmap.push(mapObj);

        });
      }
    }
  }

  public selectSeat(seatObject: any) {
    console.log("Seat to block: ", seatObject);
    if (seatObject.status == "available") {
      seatObject.status = "booked";
      this.cart.selectedSeats.push(seatObject.seatLabel);
      this.cart.totalamount += seatObject.price;
      //this.total_amount = this.cart.totalamount;
    }
    else if (seatObject.status = "booked") {
      seatObject.status = "available";
      var seatIndex = this.cart.selectedSeats.indexOf(seatObject.seatLabel);
      if (seatIndex > -1) {
        this.cart.selectedSeats.splice(seatIndex, 1);
        this.cart.seatstoStore.splice(seatIndex, 1);
        this.cart.totalamount -= seatObject.price;
        //this.total_amount = this.cart.totalamount;
      }

    }
  }

  public blockSeats(seatsToBlock: string) {
    if (seatsToBlock != "") {
      var seatsToBlockArr = seatsToBlock.split(',');
      for (let index = 0; index < seatsToBlockArr.length; index++) {
        var seat = seatsToBlockArr[index] + "";
        var seatSplitArr = seat.split("_");
        console.log("Split seat: ", seatSplitArr);
        for (let index2 = 0; index2 < this.seatmap.length; index2++) {
          const element = this.seatmap[index2];
          if (element.seatRowLabel == seatSplitArr[0]) {
            var seatObj = element.seats[parseInt(seatSplitArr[1]) - 1];
            if (seatObj) {
              console.log("\n\n\nFount Seat to block: ", seatObj);
              seatObj["status"] = "unavailable";
              this.seatmap[index2]["seats"][parseInt(seatSplitArr[1]) - 1] = seatObj;
              console.log("\n\n\nSeat Obj", seatObj);
              console.log(this.seatmap[index2]["seats"][parseInt(seatSplitArr[1]) - 1]);
              break;
            }

          }
        }

      }
    }

  }

}