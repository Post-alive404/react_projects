
import { AppBar, Container, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material'
import './App.css'
import AddItem from './assets/component/AddItem';
import { useState } from 'react';
export type Item = {
  product: string, 
  amount: string;
}
function App() {
  const [items, setItems] = useState<Item[]>([]);
  const addItem = (item: Item) => {
    setItems([item, ...items]);
  }
  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Shopping List</Typography>
        </Toolbar>
      </AppBar>
      <AddItem addItem={addItem} />
      <List>
        {
          items.map((item, index) =>
            <ListItem key={index} divider>
              <ListItemText primary={item.product} secondary={item.amount} />
            </ListItem>
          )
        }
      </List>
    </Container>
  );
}


export default App

