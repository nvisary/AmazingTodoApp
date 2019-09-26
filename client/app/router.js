import { App } from './components/App';

const Test = () => <div>test</div>
const Test2 = () => <div>test</div>

export const AppRouter = () => {
    <main>
        <Switch>
            <Route path='/test' exact component={Test}></Route>
            <Route path='/test1' exact component={Test2}></Route>
        </Switch>
    </main>
}