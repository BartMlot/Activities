import { Header } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from 'mobx-react-lite';
import ActivityListItem from "./ActivityListItem";
import { Fragment } from "react/jsx-runtime";

export default observer(function ActivityList() {
    const { activityStore } = useStore();
    const {groupedActivities} = activityStore;
    
    return (
        <>
        {groupedActivities.map(([groupName, activities]) => (
            <Fragment key={groupName}>
                <Header sub color="teal">
                   {groupName}
                </Header>
                        {activities.map(activity => (
                            <ActivityListItem key={activity.id} activity={activity} />                    
                        ))}
            </Fragment >
        ))}
        </>
    )
})