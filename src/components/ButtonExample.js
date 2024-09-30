import React, { useState } from "react";
import { Button,Flex,IconButton,Icon,Badge,Divider,SplitButton,SplitButtonMenu,Menu, MenuItem,ButtonGroup,MenuButton } from "monday-ui-react-core";
import { Bolt,Calendar,Check,WhatsNew,Announcement,Add,Sun,Moon,Favorite } from "monday-ui-react-core/icons";
import "monday-ui-react-core/dist/main.css";  // Import the default styles

function ButtonExample() {

    const [success, setSuccess] = useState(false);
    const onsuccess= function() {
        setSuccess(true);
      };

      const [loading, setLoading] = useState(false);
      const onload= function() {
          setLoading(true);
        };

        
  return (
    <div>
         <h1>Sizes</h1>
         <Divider />
        <Flex gap={Flex.gaps.MEDIUM}>
            <Button size={Button.sizes.LARGE}>Large</Button>
            <Button size={Button.sizes.MEDIUM}>Medium</Button>
            <Button size={Button.sizes.SMALL}>Small</Button>
        </Flex>
        
        <h1>Kind</h1>
        <Divider />
        <Flex gap={Flex.gaps.MEDIUM} onClick={function noRefCheck(){}}>
             
            <Button>Primary</Button>
            <Button kind={Button.kinds.SECONDARY}>Secondary</Button>
            <Button kind={Button.kinds.TERTIARY}>Tertiary</Button>
        </Flex>

        <h1>Positive and Negative</h1>
        <Divider />
        <Flex gap={Flex.gaps.MEDIUM} onClick={function noRefCheck(){}}>
            <Button color={Button.colors.POSITIVE}>Positive</Button>
            <Button color={Button.colors.NEGATIVE}>Negative</Button>
        </Flex>

        <h1>States</h1>
        <Divider />
        <Flex gap={Flex.gaps.MEDIUM} onClick={function noRefCheck(){}}>
            <Button>Regular</Button>
            <Button active>Active</Button>
        </Flex>

        <h1>Icon</h1>
        <Divider />
        <Flex gap={Flex.gaps.MEDIUM} onClick={function noRefCheck(){}}>
            
            <Button leftIcon={Calendar}>Left icon</Button>
            <Button rightIcon={Calendar}>Right icon</Button>
           
            <IconButton
            icon={Bolt}
            kind={IconButton.kinds.PRIMARY}
            ariaLabel="My primary IconButton"
                />
                <IconButton
                    icon={Bolt}
                    kind={IconButton.kinds.SECONDARY}
                    ariaLabel="My secondary IconButton"
                />
                <IconButton
                    icon={Bolt}
                    kind={IconButton.kinds.TERTIARY}
                    ariaLabel="My tertiary IconButton"
                />
        </Flex>

        <h1>Loading</h1>
        <Divider />
        <Flex gap={Flex.gaps.MEDIUM} onClick={function noRefCheck(){}}>
             <Button   loading={loading}
                onClick={onload}>Click to set Loading state</Button>
        </Flex>

     

        <h1>Success</h1>
        <Divider />
        <Flex   gap={Flex.gaps.MEDIUM} onClick={function noRefCheck(){}}>
            
                    
                        <Button
                success={success}
                onClick={onsuccess}
                successIcon={Check}
                successText="Success"
                >
                Click here for success
                </Button>
        </Flex>

        <h1>Badgets</h1>
        <Divider />
        <Flex gap={Flex.gaps.MEDIUM} onClick={function noRefCheck(){}}>
           
            <Badge>
            <Button leftIcon={function noRefCheck(){}}>
                What's new
            </Button>
            
            </Badge>
            <Badge type={Badge.types.COUNTER} count={100} maxDigits={2}>
          <Button leftIcon={WhatsNew}>{"What's new"}</Button>
         </Badge>
        </Flex>

        <h1>Menu Button </h1>
        <Divider />
        <Flex gap={Flex.gaps.MEDIUM} onClick={function noRefCheck(){}}>
        

        <MenuButton
  onMenuHide={function noRefCheck(){}}
  onMenuShow={function noRefCheck(){}}
>
  <Menu
    id="menu"
    size="medium"
  >
    <MenuItem
      icon={function noRefCheck(){}}
      iconType="SVG"
      onClick={function noRefCheck(){}}
      title="The sun"
    />
    <MenuItem
      icon={function noRefCheck(){}}
      iconType="SVG"
      onClick={function noRefCheck(){}}
      title="The moon"
    />
    <MenuItem
      icon={function noRefCheck(){}}
      iconType="SVG"
      onClick={function noRefCheck(){}}
      title="And the stars"
    />
  </Menu>
</MenuButton>
<MenuButton
      triggerElement={props => (
        <Button
          kind={Button.kinds.SECONDARY}
          {...props}
          className={""}
      
        >
          Button
        </Button>
      )}
    >
      <Menu id="menu" size={Menu.sizes.MEDIUM}>
        <MenuItem
          icon={Sun}
        
          iconType={MenuItem.iconType.SVG}
          title="The sun"
        />
        <MenuItem
          icon={Moon}

          iconType={MenuItem.iconType.SVG}
          title="The moon"
        />
        <MenuItem
          icon={Favorite}
        
          iconType={MenuItem.iconType.SVG}
          title="And the stars"
        />
      </Menu>
    </MenuButton>






        </Flex>
        
        <h1>Split Button</h1>
        <Divider />
        <Flex gap={Flex.gaps.MEDIUM} onClick={function noRefCheck(){}}>
        <SplitButton
    children="Primary"
    secondaryDialogContent={
      <SplitButtonMenu id="split-menu">
        <MenuItem icon={Check} title="Hey" />
        <MenuItem icon={Announcement} title="There" />
      </SplitButtonMenu>
      
    }
  />
  <SplitButton
    children="Secondary"
    kind={SplitButton.kinds.SECONDARY}
    secondaryDialogContent={
      <SplitButtonMenu id="split-menu">
        <MenuItem icon={Check} title="Hey" />
        <MenuItem icon={Announcement} title="There" />
      </SplitButtonMenu>
    }
  />
  <SplitButton
    children="Tertiary"
    kind={SplitButton.kinds.TERTIARY}
    secondaryDialogContent={
      <SplitButtonMenu id="split-menu">
        <MenuItem icon={Check} title="Hey" />
        <MenuItem icon={Announcement} title="There" />
      </SplitButtonMenu>
    }
  />
           <SplitButton
    leftIcon={Add}
    secondaryDialogContent={
      <SplitButtonMenu id="split-menu">
        <MenuItem icon={Check} title="Hey" />
        <MenuItem icon={Announcement} title="There" />
      </SplitButtonMenu>
    }
  >
    Left icon
  </SplitButton>
  <SplitButton
    rightIcon={Add}
    secondaryDialogContent={
      <SplitButtonMenu id="split-menu">
        <MenuItem icon={Check} title="Hey" />
        <MenuItem icon={Announcement} title="There" />
      </SplitButtonMenu>
    }
  >
    Right icon
  </SplitButton>
  <SplitButton
    children="Small"
    size={SplitButton.sizes.SMALL}
    secondaryDialogContent={
      <SplitButtonMenu id="split-menu">
        <MenuItem icon={Check} title="Hey" />
        <MenuItem icon={Announcement} title="There" />
      </SplitButtonMenu>
    }
  />
  <SplitButton
    children="Medium"
    size={SplitButton.sizes.MEDIUM}
    secondaryDialogContent={
      <SplitButtonMenu id="split-menu">
        <MenuItem icon={Check} title="Hey" />
        <MenuItem icon={Announcement} title="There" />
      </SplitButtonMenu>
    }
  />
  <SplitButton
    children="Large"
    size={SplitButton.sizes.LARGE}
    secondaryDialogContent={
      <SplitButtonMenu id="split-menu">
        <MenuItem icon={Check} title="Hey" />
        <MenuItem icon={Announcement} title="There" />
      </SplitButtonMenu>
    }
  />
        </Flex>

        <h1>Button Group</h1>
        <Divider />
        <Flex gap={Flex.gaps.MEDIUM} onClick={function noRefCheck(){}}>
        <ButtonGroup
  groupAriaLabel="button group aria label"
  value={1}
  options={[
    {
      value: 1,
      text: "Alpha",
    },
    {
      value: 2,
      text: "Beta",
    },
    {
      value: 3,
      text: "Gamma",
    },
    {
      value: 4,
      text: "Delta",
    },
  ]}
/>
<ButtonGroup
  groupAriaLabel="button group aria label"
  options={[
    {
      value: 1,
      text: "Alpha",
    },
    {
      value: 2,
      text: "Beta",
    },
    {
      value: 3,
      text: "Gamma",
    },
    {
      value: 4,
      text: "Delta",
      disabled: true,
      tooltipContent: "I'm the worst variant ever",
    },
  ]}
/>
<ButtonGroup
  disabled
  groupAriaLabel="button group aria label"
  options={[
    {
      value: 1,
      text: "Alpha",
    },
    {
      value: 2,
      text: "Beta",
    },
    {
      value: 3,
      text: "Gamma",
    },
    {
      value: 4,
      text: "Delta",
    },
  ]}
/>
         
        </Flex>


        <h1>Color Enabled</h1>
        <Divider />
        <Flex gap={Flex.gaps.MEDIUM}  onClick={function noRefCheck(){}}>
            <Flex  style={{
        backgroundColor: "#0073ea", padding:"50px",
      }}  className="monday-storybook-button_on-color-button" gap={Flex.gaps.MEDIUM}  >
            
            <Button color={Button.colors.ON_PRIMARY_COLOR} >Primary on color </Button>
            <Button color={Button.colors.ON_PRIMARY_COLOR} kind={Button.kinds.SECONDARY}> Secondary on color</Button>
            <Button color={Button.colors.ON_PRIMARY_COLOR} kind={Button.kinds.TERTIARY} >Tertiary on color </Button>
            
            </Flex>
        </Flex>

        <h1>Color Disabled</h1>
        <Divider />
        <Flex gap={Flex.gaps.MEDIUM}  onClick={function noRefCheck(){}}>
            <Flex  style={{
        backgroundColor: "#0073ea",  padding:"50px",
      }}  className="monday-storybook-button_on-color-button" gap={Flex.gaps.MEDIUM}  >
            
         
            
            <Button color={Button.colors.ON_PRIMARY_COLOR} disabled marginRight>
                Primary on color
            </Button>
            <Button
                color={Button.colors.ON_PRIMARY_COLOR}
                disabled
                marginRight
                kind={Button.kinds.SECONDARY}
            > 
                Secondary on color
            </Button>
            <Button
                color={Button.colors.ON_PRIMARY_COLOR}
                disabled
                kind={Button.kinds.TERTIARY}
            >
                Tertiary on color
            </Button>

            
            </Flex>
        </Flex>

    </div>
  );
}

export default ButtonExample;