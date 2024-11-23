# Faction Dashboard

## Overview
The **Faction Dashboard** is a React-based UI component designed to manage a faction's operations. This component includes modals and forms for tasks such as setting a leader, inviting players, managing duty statuses, promoting/demoting members, editing salaries, and more. The dashboard leverages `lucide-react` icons, Tailwind CSS for styling, and React state management for modal and form handling.

---

## Features
- **Set Leader**: Assign a member as the faction leader.
- **Invite Player**: Add a new player to the faction.
- **Set Faction Logo**: Update the faction logo via a URL.
- **Manage Duty Status**: Set duty statuses for faction members.
- **Promote/Demote Member**: Adjust ranks of faction members.
- **Edit Salary & Ranks**: Update salaries for members.
- **Responsive Design**: Built using Tailwind CSS, the dashboard adapts to different screen sizes.

---

## Project Structure
```plaintext
FactionDashboard/
├── Modal.jsx                # Handles the modal structure and display
├── SetLeaderForm.jsx        # Form to assign a leader
├── InvitePlayerForm.jsx     # Form to invite new players
├── SetLogoForm.jsx          # Form to update faction logo
├── ManageDutyForm.jsx       # Form to manage duty status
├── PromoteDemoteForm.jsx    # Form to promote/demote members
├── EditSalaryForm.jsx       # Form to edit salaries
└── FactionDashboard.jsx     # Main component rendering the dashboard
```

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd FactionDashboard
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the project**:
   ```bash
   npm start
   ```

---

## Usage

### 1. **Setting a Leader**
- Navigate to "Set Leader".
- Select a member from the dropdown.
- Submit the form to update the faction leader.

### 2. **Inviting a Player**
- Click on "Invite Player".
- Enter the player's name.
- Submit the form to send the invitation.

### 3. **Updating the Faction Logo**
- Access the "Set Logo" form.
- Enter the logo's URL.
- Submit to update the faction's visual identity.

### 4. **Managing Duty Status**
- Use the "Manage Duty" form.
- Select a member and toggle their duty status.

### 5. **Promoting or Demoting Members**
- Open the "Promote/Demote" modal.
- Select a member, choose an action (promote or demote), and specify the new rank.

### 6. **Editing Salaries**
- Use the "Edit Salary" form.
- Select a member and specify their new salary.

---

## Dependencies
- **React**: Component-based UI library.
- **lucide-react**: Icon library for React components.
- **Tailwind CSS**: Utility-first CSS framework.

---

## Customization
### Modify Styling
Update Tailwind CSS classes in the component files to adjust styles.

### Add New Features
Extend the modal and form components to include additional functionalities as required.

---

## Contributing
1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your fork:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.

---

## License
This project is licensed under the [MIT License](LICENSE).

For any questions or issues, feel free to open a GitHub issue.
