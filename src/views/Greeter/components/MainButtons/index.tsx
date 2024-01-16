/**
 * MainButtons component.
 */
import React from 'react';
import { createUseStyles } from 'react-jss';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import ButtonLink from '../../../../components/ButtonLink';
import { ContactItem } from '../../../../models';
import { getGHCredentials } from '../../../../utils';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface MainButtonsProps {
  contactData: ContactItem[];
  repoUrl: string;
}

const MainButtons: React.FC<MainButtonsProps> = ({ contactData, repoUrl }) => {
  const classes = useStyles();

  // eslint-disable-next-line
  const { repo, username } = getGHCredentials(repoUrl);

  const centerButton = contactData.filter((c) => c.isCenter)[0] as ContactItem;
  const mainContacts = contactData.filter((c) => c.isMain) as ContactItem[];

  return (
    <div className={classes.root}>
      <div>
        <ButtonLink
          key={`main-contact-${centerButton.icon}`}
          href={centerButton.url}
          icon={centerButton.icon as IconProp}
          size="lg"
          text={centerButton.text || ''}
          title=""
        />
      </div>
      <div className={classes.mainButtons}>
        {mainContacts.map((contact) => (
          <ButtonLink
            key={`main-contact-${contact.icon}`}
            href={contact.url}
            icon={contact.icon as IconProp}
            size="lg"
            text={contact.text || ''}
            title=""
          />
        ))}
      </div>
    </div>
  );
};

export default MainButtons;
