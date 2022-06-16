import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-sample-page1',
    templateUrl: './sample-page1.component.html',
    styleUrls: ['./sample-page1.component.css']
})
export class SamplePage1Component implements OnInit {

    name: string = "Helo";

    // order: string;

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.queryParams.subscribe(p => {
            // Do query params stuff here
            console.log(p);
        });
    }

    greet(): void {
        alert("Hello " + this.name);
    }

    getData(): void {
        this.http.get("https://ongzhixian.github.io/BasicAngularApp/sampleData/shipping.json")
            .subscribe(data => {
                console.log(data);
            });

        //return this.http.get<Hero[]>(this.heroesUrl)

    }
}
