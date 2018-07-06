import {createStore, combineReducers} from 'redux';
// import uuid from 'uuid';

//ADD_EXPENSE
const addExpense = (
    {
        description = '',
        notes = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expenses:{
        id:
        description,
        amount,
        notes,
        createdAt
    }
});

//Remove Expense
const removeExpense = (
    {id} = {}
) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//EDIT_EXPENSE
const editExpense = (id, updates) => ({
type: 'EDIT_EXPENSE',
id,
updates
});

//Expense Reducer
const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
switch(action.type){
    case 'ADD_EXPENSE':
        return [
            ...state,
            action.expenses
        ];
    case 'REMOVE_EXPENSE':
        return state.filter(({ id }) => id !== action.id );
    case 'EDIT_EXPENSE':
        return state.map((expense) => {
            if(expense.id=== action.id){
                return{
                    ...expense,
                    ...action.updates
                }
            }
        });
    default:
        return state;
    }
};




//Filter Reducer

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

const sortByDate = () => ({
    type: 'SORT_BY_Date'
});

const setStartDate = (startDate = '') => ({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = (endDate = '') => ({
    type: 'SET_END_DATE',
    endDate
});
const filterReducerDefaultState = {
    text: '', 
    sortBy: 'date', 
    startDate: undefined, 
    endDate: undefined
};

const filterReducer = (state = filterReducerDefaultState, action) =>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_Date':
            return{
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return{
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return{
                ...state,
                endDate: action.endDate
            }
        default:
        return state;
    }
};


// Get Visible Expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return  startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });
}

const store = createStore(combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
})
);
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000}));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000}));

//store.dispatch(removeExpense({ id: expenseOne.expenses.id }));
//store.dispatch(editExpense(expenseTwo.expenses.id, {amount: 500}));

//store.dispatch(setTextFilter('fe'));
//store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(135));

const demoState = {
    expenses: [{
        id: 'sdsdsdsd',
        description: 'January Rent',
        amount: '190000',
        note: 'may be he last rent of Columbia Ave',
        createdAt: ''
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        EndDate: undefined
    }
}