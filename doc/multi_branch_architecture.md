# Multi-Branch Architecture Design Plan

This document outlines the architectural changes required to support a multi-branch system for Malhar Dosa, including Super Admin capabilities, Branch Admins, and flexible staff assignments.

## 1. Core Data Model (Mock Database)

Since the application currently lacks a backend, we will implement a robust `MockDataManager` to simulate a relational database structure.

### Entities

#### `Branch`
- [id](file:///Users/mac/Documents/testing/malhar-dosa/malhar-dosa/components/dashboard/Sidebar.tsx#7-40): string (UUID)
- `name`: string (e.g., "Vesu", "Adajan")
- `location`: string
- `status`: "Active" | "Inactive"

#### `User`
- [id](file:///Users/mac/Documents/testing/malhar-dosa/malhar-dosa/components/dashboard/Sidebar.tsx#7-40): string
- `name`: string
- `email`: string
- `role`: "SuperAdmin" | "BranchAdmin" | "Staff"
- `subRole`: "Manager" | "Chef" | "Waiter" | "Cashier" (Applicable if role is Staff)
- `assignedBranchIds`: string[] (List of branches the user is authorized to work at)
- `password`: string (Mock)

#### [Order](file:///Users/mac/Documents/testing/malhar-dosa/malhar-dosa/lib/data.ts#14-22)
- [id](file:///Users/mac/Documents/testing/malhar-dosa/malhar-dosa/components/dashboard/Sidebar.tsx#7-40): string
- `branchId`: string (Links order to specific branch)
- `items`: OrderItem[]
- `status`: string
- `total`: number
- `createdAt`: Date

## 2. Authentication & Session Management

We will implement a `AuthProvider` (React Context) to manage:
1.  **Current User**: The logged-in user.
2.  **Current Branch**: The branch currently being managed/viewed.
    - For **SuperAdmin**: Can switch to *any* branch.
    - For **BranchAdmin**: Can switch to any *assigned* branch.
    - For **Staff**: Must select a branch upon login if assigned to multiple (e.g., "Which branch are you working at today?").

### Login Flow
1.  User enters credentials.
2.  System validates against `MockDataManager`.
3.  If valid:
    - If `assignedBranchIds.length > 1`: Redirect to **Branch Selection Screen**.
    - If `assignedBranchIds.length === 1`: Auto-select that branch and redirect to Dashboard.
    - If `SuperAdmin`: Redirect to **Super Admin Overview** (Global View).

## 3. Dashboard Structure & Navigation

The [Sidebar](file:///Users/mac/Documents/testing/malhar-dosa/malhar-dosa/components/dashboard/Sidebar.tsx#7-40) component will become dynamic based on `currentUser.role` and `currentBranch`.

### Role-Based Views

#### **Super Admin**
- **Global Overview**: Aggregate stats from all branches (Total Revenue, Total Orders).
- **Branch Management**: Create/Edit/Disable branches.
- **User Management**: Create Admins, Assign Staff to Branches.
- **Menu Management**: Global menu vs Branch-specific availability.

#### **Branch Admin**
- **Branch Dashboard**: Stats specific to their branch.
- **Staff Schedule**: View who is working at their branch today.
- **Inventory/Menu**: Toggle item availability for their branch.

#### **Staff (Cook/Waiter/Cashier)**
- **Operational View**: Limited to the specific functions of their role (Orders, Billing) for the *current* branch only.

## 4. Implementation Steps

### Phase 1: Data Layer & Auth Refactor
1.  Create `lib/mock-db.ts` with the new relational schema.
2.  Create `context/AuthContext.tsx` to handle user sessions and branch context.
3.  Update [login/page.tsx](file:///Users/mac/Documents/testing/malhar-dosa/malhar-dosa/app/%28public%29/login/page.tsx) to use the new `AuthContext` and handle branch selection.

### Phase 2: Super Admin & Branch Management
1.  Create `app/dashboard/super-admin` routes.
2.  Implement "Branch Switcher" in the global header/sidebar.
3.  Update [Sidebar.tsx](file:///Users/mac/Documents/testing/malhar-dosa/malhar-dosa/components/dashboard/Sidebar.tsx) to show/hide links based on role.

### Phase 3: Multi-Branch Data Segregation
1.  Refactor [dashboard/page.tsx](file:///Users/mac/Documents/testing/malhar-dosa/malhar-dosa/app/dashboard/page.tsx) to fetch data filtered by `currentBranch.id`.
2.  Update Order Management to tag new orders with `currentBranch.id`.
3.  Update Staff Management to allow multi-select branch assignment.

## 5. UI/UX Considerations
- **Branch Indicator**: Always clearly show which branch is currently active (e.g., "Reviewing: Vesu Branch").
- **Easy Switching**: fast dropdown to switch branches without logging out.
- **Global Search**: Super Admins should be able to search orders across all branches.
