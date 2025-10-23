import UsersIcon from '../assets/icons/users-stats.svg';
import ActiveUsersIcon from '../assets/icons/activeusers-stats.svg';
import LoansUsersIcon from '../assets/icons/users-loans-stats.svg';
import SavingsUsersIcon from '../assets/icons/users-savings-stats.svg';

 export const stats = [
   {
     id: 1,
     title: "USERS",
     count: "2,453",
     icon: UsersIcon,
   },
   {
     id: 2,
     title: "ACTIVE USERS",
     count: "2,453",
     icon: ActiveUsersIcon,
   },
   {
     id: 3,
     title: "USERS WITH LOANS",
     count: "12,453",
     icon: LoansUsersIcon,
   },
   {
     id: 4,
     title: "USERS WITH SAVINGS",
     count: "102,453",
     icon: SavingsUsersIcon,
   },
 ];

export const loanData = [
   {
     title: "All loans",
     value: "NGN 0",
     metrics: [
       { label: "Count", value: "0" },
       { label: "Disbursed", value: "NGN 0" },
       { label: "Paid", value: "NGN 0" },
       { label: "Schedules", value: "0" },
     ],
   },
   {
     title: "Running loans",
     value: "NGN 0",
     metrics: [
       { label: "Count", value: "0" },
       { label: "Disbursed", value: "NGN 0" },
       { label: "Interest", value: "NGN 0" },
       { label: "Fees", value: "NGN 0" },
     ],
   },
   {
     title: "Paid loans",
     value: "NGN 0",
     metrics: [
       { label: "Count", value: "0" },
       { label: "Disbursed", value: "NGN 0" },
       { label: "Interest", value: "NGN 0" },
       { label: "Fees", value: "NGN 0" },
     ],
   },
   {
     title: "Past due loans",
     value: "NGN 0",
     metrics: [
       { label: "Count", value: "0" },
       { label: "Disbursed", value: "NGN 0" },
       { label: "Interest", value: "NGN 0" },
       { label: "Penalty", value: "NGN 0" },
     ],
   },
]; 

export const customerData = [
  { title: "All customers", value: "0" },
  { title: "Active customers", value: "0" },
  { title: "Customers with loan", value: "0" },
  { title: "Customers with savings", value: "0" },
];

export const savingsData = [
  { title: "Savings balance", value: "NGN 0" },
  { title: "Savings target", value: "NGN 0" },
  { title: "Active savings plans", value: "0" },
  { title: "Active savers", value: "0" },
];