import * as React from "react";

interface Props {
  options: string[];
  onChange?: Function;
  // booksOfBible?: any;
}

// This is just an example of a styled component
// const StyledDropdown = styled.select`
//   font-size: 1.5em;
// `;

class Dropdown extends React.Component<Props> {
  public render() {
    const { options, onChange } = this.props;
    return (
      <select>
        {options.map((option: string, i) => <option key={i}>{option}</option>)}
      </select>
    );
  }
}

export default Dropdown;
