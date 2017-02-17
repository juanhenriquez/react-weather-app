import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import { Link } from 'react-router';

const Examples = props => {
  return (
  	<Card>
			<CardTitle
					title="Examples!"
					subtitle="Here are a few examples locations to try out:"></CardTitle>
			<CardText style={{ padding: '0 16px' }}>
				<List style={{ padding: '0' }}>
					<ListItem
							primaryText={<Link to="/?location=Caracas,Venezuela">Caracas Venezuela</Link>}/>

					<ListItem
							primaryText={<Link to="/?location=MountainView,California">Mountain View, Califronia</Link>}/>

					<ListItem
							primaryText={<Link to="/?location=Barcelona,Spain">Barcelona, Spain</Link>}/>
				</List>
			</CardText>
		</Card>
  );
}

export default Examples;
