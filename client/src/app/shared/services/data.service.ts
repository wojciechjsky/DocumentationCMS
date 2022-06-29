import {Injectable} from '@angular/core';
import {Observable, pipe, Subject} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {HttpService} from "./http.service";
import {IPage} from "../models/IPage";
import {Router} from "@angular/router";
import {IPageNameId} from "../models/IPageNameId";

const PAGES_URL = 'pages'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  markdownPage: IPage;
  public subjectPage = new Subject<IPage>();
  pages: IPage[];
  page: IPage;

  constructor(private http: HttpService, private router: Router) {
  }

  public getSinglePage(id: number) {
    return this.http.get<IPage>(`${PAGES_URL}/${id}`).subscribe(page =>{
      this.page = page
      this.subjectPage.next(this.page)
    } );
  }

  public getAllPageNameId(): Observable<IPageNameId[]> {
    return this.http.get<IPage[]>(PAGES_URL)
      .pipe(map(pages => pages.map(page => ({
          id: page.id,
          name: page.name
        }) as IPageNameId)
      ))
  }

  public createNewPage(page: IPage): Observable<IPage> {
    return this.http.post<IPage>(`${PAGES_URL}`, page);
  }

  public getAllPagesAsObservable(): Observable<IPage[]> {
    return this.http.get<IPage[]>(PAGES_URL)
      .pipe(tap(data => console.log(data)));
  }

  async getAllPages() {
    this.pages = await this.http.get<IPage[]>(PAGES_URL).toPromise().then((page: IPage[]) => page);
  }

  public updateSinglePage(page: IPage): Observable<IPage> {
    return this.http.put<IPage>(`${PAGES_URL}/${page.id}`, page)
  }

  public deletePage(id: number): Observable<IPage> {
    return this.http.delete<IPage>(`${PAGES_URL}/${id}`)
  }

  public setMarkdownData(markdownPage: IPage) {
    this.markdownPage = markdownPage;
  };

  public getMarkdownData() {
    return this.markdownPage;
  };

  refreshPage(): void {
    this.router.navigate(['articles'])
      .then(() => {
        window.location.reload();
      });
  }
}
