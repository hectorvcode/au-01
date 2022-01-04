# NgFor

A structural directive that renders a template for each item in a collection. The directive is placed on an element, which becomes the parent of the cloned templates.

### Description:

The _ngforOf_ directive is generally used in the shorthand form \*ngFor. In this form, the template to be rendered for each iteration is the content of an anchor element containing the directive.

We have the following example:

Let's work with the following class:

```typescript
class Movie {
  title: string;
  director: string;
  cast: string;
  releaseDate: string;
}
```

In the component we declare the variable movies as follows:

```TypeScript
    export class AppComponent{
        movies: Movie[]=[
            {
                title:'Zootopia',director:'Byron Howard, Rich Moore',cast:'Idris Elba, Ginnifer Goodwin, Jason Bateman', releaseDate:'March 4, 2016'
            },
            {
                title:'Batman v Superman: Dawn of Justice',director:'Zack Snyder',cast:'Ben Affleck, Henry Cavill, Amy Adams',releaseDate:'March 25, 2016'
            },
            {
                title:'Captain America: Civil War',director:'Anthony Russo, Joe Russo',cast:'Scarlett Johansson, Elizabeth Olsen, Chris Evans',releaseDate:'May 6, 2016'
            },
            {
                title:'X-Men: Apocalypse',director:'Bryan Singer',cast:'Jennifer Lawrence, Olivia Munn, Oscar Isaac',releaseDate:'May 27, 2016'
            }
        ]
    }
```

and we can make our html file to render the data

```html
<div class="panel panel-primary">
  <div class="panel-heading">{{title}}</div>
  <div class="panel-body">
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Director</th>
            <th>Cast</th>
            <th>Release Date</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let movie of movies;">
            <td>{{movie.title}}</td>
            <td>{{movie.director}}</td>
            <td>{{movie.cast}}</td>
            <td>{{movie.releaseDate}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
```
