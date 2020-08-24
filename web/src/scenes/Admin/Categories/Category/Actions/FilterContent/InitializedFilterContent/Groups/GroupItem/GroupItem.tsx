import React from "react";
import {
	useAddFieldToFilterGroupMutation,
	GetCategoryFilterDocument
} from "../../../../../../../../../generated/graphql";
import { Button } from "antd";
import { getOperationName } from "@apollo/client/utilities";
import Droppable from "./Droppable";
import Draggable from "./Draggable";

interface Props {
	filterGroup: { id: string };
	provided?: any;
	getListStyle: any;
	snapshot?: any;

	children: any;

	onEnterToDrop: () => void;
}

const GroupItem = ({
	filterGroup,
	getListStyle,
	children,
	onEnterToDrop
}: Props) => {
	const [addFieldToFilterGroup] = useAddFieldToFilterGroupMutation();

	const onAddField = async () => {
		try {
			const {} = addFieldToFilterGroup({
				variables: {
					name: "GroupItem1",
					filterGroupId: filterGroup.id
				},
				refetchQueries: [getOperationName(GetCategoryFilterDocument)!]
			});
		} catch (e) {
			console.log(e.message);
		}
	};

	return (
		<div
			style={getListStyle(false)}
			onMouseMoveCapture={e => {
				if (e.target === e.currentTarget) {
					onEnterToDrop();
				}
			}}
		>
			<div>
				<Button onClick={onAddField}>Add new field</Button>
			</div>
			{children}
		</div>
	);
};

GroupItem.Droppable = Droppable;
GroupItem.Draggable = Draggable;

export default GroupItem;