import React, { Component } from 'react'
import {Button, Container} from 'semantic-ui-react'
import axios from 'axios'

class MovieGallery extends Component {
  render() {
    if(this.props.movies.length==0){
      return (
        <div >
        </div>
      )

    }
    else{
//       <Grid columns={3}>
//   <Grid.Row>
//     <Grid.Column>
//       <Image src='/images/wireframe/paragraph.png' />
//     </Grid.Column>
//     <Grid.Column>
//       <Image src='/images/wireframe/paragraph.png' />
//     </Grid.Column>
//   </Grid.Row>
//
//   <Grid.Row>
//     <Grid.Column>
//       <Image src='/images/wireframe/paragraph.png' />
//     </Grid.Column>
//     <Grid.Column>
//       <Image src='/images/wireframe/paragraph.png' />
//     </Grid.Column>
//     <Grid.Column>
//       <Image src='/images/wireframe/paragraph.png' />
//     </Grid.Column>
//   </Grid.Row>
// </Grid>
      var rows = [];
      var complete=[];
      for (var i = 0; i < this.props.movies.length; i++) {
        var poster_url=`https://image.tmdb.org/t/p/w185${this.props.movies[i].poster_path}`;
        //if()
        rows.push(
          <Container>
    	 		  <Button>
              <img src={poster_url}/>
            </Button>
    	    </Container>
        );
      }
      return (
        rows
      );
    }
  }
}

export default MovieGallery;
