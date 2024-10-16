"""changed in to bigint

Revision ID: ec4a03bf30e6
Revises: 46819afbb830
Create Date: 2024-10-16 10:57:18.902948

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'ec4a03bf30e6'
down_revision: Union[str, None] = '46819afbb830'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('users', 'contactno',
               existing_type=sa.INTEGER(),
               type_=sa.BIGINT(),
               existing_nullable=False)
    op.alter_column('users', 'zipcode',
               existing_type=sa.INTEGER(),
               type_=sa.BIGINT(),
               existing_nullable=False)
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('users', 'zipcode',
               existing_type=sa.BIGINT(),
               type_=sa.INTEGER(),
               existing_nullable=False)
    op.alter_column('users', 'contactno',
               existing_type=sa.BIGINT(),
               type_=sa.INTEGER(),
               existing_nullable=False)
    # ### end Alembic commands ###
